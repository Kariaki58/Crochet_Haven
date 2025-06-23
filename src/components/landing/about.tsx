import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Portrait of the crochet artist"
              width={500}
              height={500}
              className="rounded-full aspect-square object-cover shadow-2xl"
              data-ai-hint="smiling woman"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Meet the Maker
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Hello! I'm Jane, the hands and heart behind Crochet Haven. What started as a hobby has blossomed into a full-blown passion for creating beautiful, lasting pieces of art from yarn. Every item is infused with joy and meticulous care, and I love nothing more than bringing a customer's unique idea to life.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed">
              For me, crochet is more than just a craft; it's a way to connect with people and create something that will be treasured for years to come. Thank you for being a part of this journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
