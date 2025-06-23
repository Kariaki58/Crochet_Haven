import { Button } from '@/components/ui/button';
import { OrderModal } from '@/components/order-modal';
import { YarnBallIcon } from '../icons/yarn-ball-icon';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <YarnBallIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            Crochet Haven
          </span>
        </div>
        <OrderModal>
          <Button>Place an Order</Button>
        </OrderModal>
      </div>
    </header>
  );
}
