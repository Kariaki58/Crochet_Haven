'use client';

import { useEffect, useRef, useActionState, type ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitOrder, type OrderFormState } from '@/app/actions';
import { Loader2 } from 'lucide-react';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto" variant="secondary">
      {pending ? <Loader2 className="animate-spin" /> : 'Place My Order'}
    </Button>
  );
}

export function OrderModal({ children }: { children: ReactNode }) {
  const [state, formAction] = useActionState<OrderFormState, FormData>(submitOrder, { message: null, status: null });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
      closeButtonRef.current?.click();
    } else if (state.status === 'error' && !state.errors) {
      toast({
        title: 'Oops!',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-background">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">Place Your Custom Order</DialogTitle>
          <DialogDescription>
            Fill out the form below to start your custom crochet creation. We'll get back to you to confirm details and payment.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="grid gap-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" />
              {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" />
               {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="productDetails">Product Details</Label>
            <Textarea
              id="productDetails"
              name="productDetails"
              placeholder="e.g., A chunky cardigan, light blue, with balloon sleeves..."
            />
            {state.errors?.productDetails && <p className="text-sm text-destructive">{state.errors.productDetails[0]}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="measurements">Measurements (Optional)</Label>
            <Input
              id="measurements"
              name="measurements"
              placeholder="e.g., Bust: 36in, Waist: 30in, Sleeve length: 24in"
            />
             {state.errors?.measurements && <p className="text-sm text-destructive">{state.errors.measurements[0]}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="agreedPrice">Agreed Price ($)</Label>
            <Input id="agreedPrice" name="agreedPrice" type="number" step="0.01" />
            {state.errors?.agreedPrice && <p className="text-sm text-destructive">{state.errors.agreedPrice[0]}</p>}
          </div>
          {state.status === 'error' && state.message && state.errors && (
             <p className="text-sm text-center text-destructive">{state.message}</p>
          )}
          <DialogFooter>
             <DialogClose asChild>
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </DialogClose>
            <SubmitButton />
          </DialogFooter>
        </form>
         <DialogClose ref={closeButtonRef} className="hidden" />
      </DialogContent>
    </Dialog>
  );
}
