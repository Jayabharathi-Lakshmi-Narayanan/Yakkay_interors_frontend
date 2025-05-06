import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';
import ContactCTA from '@/components/home/ContactCTA';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <ContactCTA />
      <ContactForm />
    </div>
  );
}