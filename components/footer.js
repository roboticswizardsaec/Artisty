
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-party-purple to-party-pink text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Artistly</h3>
            <p className="mb-4">Making events unforgettable since 2023</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-party-yellow transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-party-yellow transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-party-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-party-yellow transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For Event Planners</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-party-yellow transition-colors">Browse Artists</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Event Ideas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For Artists</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-party-yellow transition-colors">Join Our Platform</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Artist Resources</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-party-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-party-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© 2023 Artistly. All rights reserved. Party on! 🎉</p>
        </div>
      </div>
    </footer>
  );
}