import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gold-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ruby-green-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to create a space that reflects your style, meets your needs, and exceeds your expectations.
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-gold-500 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-lg group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;