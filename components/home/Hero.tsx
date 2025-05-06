'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Elevate Your Space',
      subtitle: 'Luxury Interior Design Solutions'
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      title: 'Transform Your Vision',
      subtitle: 'Sophisticated & Timeless Designs'
    },
    {
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      title: 'Create Unforgettable',
      subtitle: 'Spaces That Inspire'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.image}
            alt={`Interior design ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white container-custom">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-slide-up">
          <span className="gold-text">{slides[currentSlide].title}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link href="#services" className="gold-button flex items-center justify-center group">
            Explore Our Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="#contact" className="green-button flex items-center justify-center group">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-gold-500 w-10' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;