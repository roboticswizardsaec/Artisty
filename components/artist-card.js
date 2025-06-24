import Link from 'next/link';
import Image from 'next/image';
import { Star, Music, Mic2, Zap } from 'lucide-react';

const categoryIcons = {
  'Singer': <Mic2 className="h-5 w-5" />,
  'Dancer': <Zap className="h-5 w-5" />,
  'DJ': <Music className="h-5 w-5" />,
};

export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white dark:bg-blue-400 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 transition-transform">
      <div className="relative h-60 bg-gradient-to-br from-party-purple/20 to-party-pink/20 dark:from-gray-700/50 dark:to-gray-600/50">
        <Image 
          src={artist.image} 
          alt={artist.name}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{artist.name}</h3>
          <div className="flex items-center space-x-1 text-party-yellow">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </div>
      </div>
      
      <div className="p-5 dark:text-gray-100">
        <div className="flex flex-wrap gap-2 mb-3">
          {artist.categories.map(category => (
            <span 
              key={category} 
              className="flex items-center px-3 py-1 rounded-full text-xs font-medium bg-party-teal/10 text-party-teal dark:bg-party-teal/20 dark:text-party-teal"
            >
              {categoryIcons[category] || null}
              <span className="ml-1">{category}</span>
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-50 dark:text-gray-50">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{artist.location}</span>
          </div>
          <div className="font-bold text-party-purple dark:text-party-teal">₹{artist.fee.toLocaleString()}</div>
        </div>
        
        <Link 
          href={`/artists/${artist.id}`}
          className="block w-full text-center bg-gradient-to-r from-party-pink to-party-purple dark:from-party-purple dark:to-party-blue text-white py-2 rounded-lg font-bold hover:from-party-purple hover:to-party-blue transition-all"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}