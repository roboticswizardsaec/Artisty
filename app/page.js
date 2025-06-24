import Link from 'next/link';
import { Music, Mic2, Star, Zap } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  const categories = [
    { id: 1, name: 'Singers', icon: <Mic2 className="h-10 w-10" />, color: 'bg-party-pink' },
    { id: 2, name: 'Dancers', icon: <Zap className="h-10 w-10" />, color: 'bg-party-purple' },
    { id: 3, name: 'DJs', icon: <Music className="h-10 w-10" />, color: 'bg-party-blue' },
    { id: 4, name: 'Comedians', icon: <Star className="h-10 w-10" />, color: 'bg-party-teal' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-1">
        {/* Hero Section with Confetti Background */}
        <section className="relative overflow-hidden text-center py-20 bg-gradient-to-b from-party-purple to-party-pink text-white">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-blue-200"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Turn Your Event <span className="text-party-yellow">Into a Party!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Book the hottest performers and make your event unforgettable
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/artists" 
                className="bg-party-yellow text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-400 transition-colors shadow-lg"
              >
                Browse Artists
              </Link>
              <Link 
                href="/onboarding" 
                className="bg-white text-blue-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-party-teal hover:text-blue-400 transition-colors shadow-lg"
              >
                Join as Artist
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-party-pink to-party-purple">
                Our Star Performers
              </span>
            </h2>
            <p className="text-center text-blue-400 mb-12 max-w-2xl mx-auto">
              From energetic dancers to mesmerizing vocalists, find the perfect match for your event
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  href={`/artists?category=${category.name.toLowerCase()}`}
                  className={`${category.color} p-8 rounded-2xl text-blue-400 text-center hover:scale-105 transition-transform shadow-lg`}
                >
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl text-blue-400 font-bold">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-br from-party-teal/10 to-party-blue/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-party-blue to-party-teal">
                What Our Clients Say
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The DJ we booked had everyone dancing all night! Best wedding ever!",
                  name: "Aisha & Raj",
                  event: "Wedding Reception"
                },
                {
                  quote: "Our corporate gala was transformed with an amazing live band from Artistly.",
                  name: "TechCorp India",
                  event: "Annual Gala"
                },
                {
                  quote: "The magician kept both kids and adults entertained for hours. 10/10!",
                  name: "Neha's Birthday",
                  event: "Birthday Party"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-party-yellow text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}