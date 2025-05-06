import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-serif font-bold text-gold-500">YAKKAY</span>
              <span className="text-2xl font-serif ml-2 text-ruby-green-500">Interiors</span>
            </div>
            <p className="text-gray-400 mt-4">
              Premium interior design services for residential and commercial spaces. 
              Transforming spaces into extraordinary experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-gold-500 transition-colors">Portfolio</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-gold-500 transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium mb-4 text-gold-500">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Residential Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Commercial Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Space Planning</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">3D Visualization</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Furniture Selection</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium mb-4 text-gold-500">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 text-gold-500" size={18} />
                <p className="text-gray-400">
                  RMPA Tower, No.18, 3rd Main Rd, Jeyachandran Nagar, Pallikaranai, Chennai, Tamil Nadu, India - 600100
                </p>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 text-gold-500" size={18} />
                <p className="text-gray-400">
                  1334 Brittmoore Rd, Houston, Texas, 77494
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-gold-500" size={18} />
                <p className="text-gray-400">
                  WhatsApp: +91 9043976715
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-gold-500" size={18} />
                <p className="text-gray-400">
                  Email: contact@yakkayinteriors.com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} YAKKAY Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 text-sm hover:text-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-gold-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-gold-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;