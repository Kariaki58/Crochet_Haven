import { Ruler, CreditCard, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const steps = [
  {
    icon: <Ruler className="h-10 w-10" />,
    title: '1. Share Your Vision',
    description: 'Use our order form to tell us what you want, including any specific measurements and design ideas.',
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: '2. Confirm Your Order',
    description: 'We will contact you to confirm the details and agree on a price. A part payment secures your spot.',
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: '3. Receive Your Masterpiece',
    description: 'Once complete, we\'ll arrange delivery. You pay the balance upon receiving your unique, handcrafted item.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32 bg-secondary/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Your Custom Crochet Journey
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Getting a one-of-a-kind piece is as easy as 1-2-3. Here’s how it works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.title} className="text-center border-2 border-primary/20 shadow-lg">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
