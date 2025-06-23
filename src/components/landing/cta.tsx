import { Button } from '@/components/ui/button';
import { OrderModal } from '@/components/order-modal';

export function Cta() {
  return (
    <section id="cta" className="py-12 md:py-24 lg:py-32 bg-secondary/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Ready to wear something truly special?
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let's collaborate on a piece that's uniquely you. Click the button below to get started on your custom order.
          </p>
          <OrderModal>
            <Button size="xl" className="font-headline text-lg" variant="default">
              Start My Custom Order
            </Button>
          </OrderModal>
        </div>
      </div>
    </section>
  );
}
