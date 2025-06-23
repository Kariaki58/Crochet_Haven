import { HeartHandshake, Palette, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <HeartHandshake className="h-10 w-10" />,
    title: 'Handmade with Heart',
    description: 'Every stitch is made with love and attention to detail, ensuring a high-quality, personal item you can cherish.',
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: 'Fully Customizable',
    description: 'Your imagination is the limit. We work with you to create a piece that perfectly matches your style and vision.',
  },
  {
    icon: <Leaf className="h-10 w-10" />,
    title: 'Sustainable & Ethical',
    description: 'We prioritize using eco-friendly yarns and ethical practices, so you can feel good about your purchase.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Why Choose Crochet Haven?
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're not just selling crochet; we're offering a unique, personal experience and a product that lasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center flex flex-col items-center justify-center p-6 border-0 shadow-none bg-transparent">
              <CardHeader className="items-center p-0 mb-4">
                <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
