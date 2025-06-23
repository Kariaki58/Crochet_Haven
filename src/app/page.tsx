import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Gallery } from '@/components/landing/gallery';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Testimonials } from '@/components/landing/testimonials';
import { About } from '@/components/landing/about';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
