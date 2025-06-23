import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const galleryItems = [
  {
    title: 'Amigurumi Octopus',
    description: 'A cute and cuddly friend for all ages.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'crochet octopus',
  },
  {
    title: 'Chunky Knit Cardigan',
    description: 'Stay warm and stylish in this custom-fit cardigan.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'crochet cardigan',
  },
  {
    title: 'Boho Market Bag',
    description: 'Your perfect companion for a trip to the farmers market.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'crochet bag',
  },
  {
    title: 'Cozy Baby Blanket',
    description: 'A soft, heirloom-quality blanket for the little one.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'crochet blanket',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Our Latest Creations
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Every piece is made with passion and precision. Get inspired for your own custom order.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.title} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full h-auto aspect-square object-cover"
                  data-ai-hint={item.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
