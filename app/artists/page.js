import { artists } from '@/lib/constants';
import ArtistCard from '@/components/artist-card';
import FilterBlock from '@/components/filter-block';

export default function ArtistsPage({ searchParams }) {
  const categoryFilter = searchParams.category;
  const locationFilter = searchParams.location;
  const priceFilter = searchParams.price;

  const filteredArtists = artists.filter((artist) => {
    let matches = true;
    
    if (categoryFilter) {
      matches = matches && artist.categories.includes(categoryFilter);
    }
    
    if (locationFilter) {
      matches = matches && artist.location.toLowerCase().includes(locationFilter.toLowerCase());
    }
    
    if (priceFilter) {
      const [min, max] = priceFilter.split('-').map(Number);
      matches = matches && artist.fee >= min && artist.fee <= max;
    }
    
    return matches;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Artists</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <FilterBlock />
        </aside>
        
        <div className="flex-1">
          {filteredArtists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">No artists found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}