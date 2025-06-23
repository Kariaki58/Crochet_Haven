import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { OrderModal } from '@/components/order-modal';

export function Hero() {
  return (
    <section className="relative h-[640px] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A cozy, well-lit room with crochet supplies"
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-50"
        data-ai-hint="cozy crochet"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight">
              Handcrafted with Love, Just for You.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discover unique, custom-made crochet pieces that tell a story. From cozy sweaters to adorable amigurumi, we bring your vision to life, one stitch at a time.
            </p>
            <OrderModal>
              <Button size="xl" variant="secondary" className="font-headline text-lg">
                Place a Custom Order
              </Button>
            </OrderModal>
          </div>
        </div>
      </div>
    </section>
  );
}
