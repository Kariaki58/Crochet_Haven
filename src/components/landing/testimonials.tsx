'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait',
    review: "I am absolutely in love with the custom cardigan I ordered! The quality is outstanding, and it's so cozy. The process was so easy, and Jane was wonderful to work with.",
  },
  {
    name: 'Michael B.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait',
    review: "The amigurumi octopus I got for my daughter is adorable and so well-made. She carries it everywhere. It's the perfect, unique gift. Highly recommend!",
  },
  {
    name: 'Emily R.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'person portrait',
    review: "My market bag is not only beautiful but also incredibly sturdy. I get compliments on it every time I use it. You can tell it was made with care and skill.",
  },
  {
    name: 'David C.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait smiling',
    review: 'The custom sweater is my new favorite piece of clothing. It fits perfectly and the yarn is so soft. Exceeded all my expectations!',
  },
  {
    name: 'Jessica P.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman smiling',
    review: 'I commissioned a set of coasters and they are just gorgeous. They add such a lovely, handmade touch to my living room. Thank you, Crochet Haven!',
  },
  {
    name: 'Alex T.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'person face',
    review: "The baby blanket I ordered for a friend's shower was the star of the show. It's an heirloom piece that will be cherished for years. Beautiful work.",
  },
  {
    name: 'Olivia M.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'woman portrait',
    review: "Working with Jane was a dream. She took my vague idea for a shawl and turned it into something more beautiful than I could have imagined. I'm so happy!",
  },
  {
    name: 'Ben S.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man smiling',
    review: 'My girlfriend loved the amigurumi bee I got her for our anniversary. The craftsmanship is top-notch. It was the perfect, thoughtful gift.',
  },
  {
    name: 'Chloe W.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'smiling person',
    review: 'The attention to detail on my custom top is incredible. You can really feel the love and effort that went into making it. I will definitely be a returning customer.',
  },
  {
    name: 'Ryan G.',
    avatar: 'https://placehold.co/100x100.png',
    aiHint: 'man portrait face',
    review: "I'm not a crochet expert, but I know quality when I see it. The hat and scarf set I ordered is warm, stylish, and clearly made to last. 10/10.",
  },
];

const REVIEWS_PER_PAGE = 3;

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / REVIEWS_PER_PAGE);

  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const endIndex = startIndex + REVIEWS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-secondary/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            What Our Customers Are Saying
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're proud to have created pieces that our customers love. Here's some of their feedback.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {currentTestimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold font-headline">{testimonial.name}</p>
                    <div className="flex text-primary">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 gap-4">
          <Button onClick={goToPreviousPage} disabled={currentPage === 1} variant="outline">
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button onClick={goToNextPage} disabled={currentPage === totalPages} variant="outline">
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
