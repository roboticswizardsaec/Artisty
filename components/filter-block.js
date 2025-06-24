'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categories, locations, priceRanges } from '@/lib/constants';
import { Funnel, X } from 'lucide-react';

export default function FilterBlock() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const activeFilters = [
    searchParams.get('category') && { name: 'Category', value: searchParams.get('category') },
    searchParams.get('location') && { name: 'Location', value: searchParams.get('location') },
    searchParams.get('price') && { name: 'Price', value: priceRanges.find(r => r.value === searchParams.get('price'))?.label }
  ].filter(Boolean);

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    
    router.push(`/artists?${params.toString()}`);
  };

  return (
    <div className="bg-white dark:bg-blue-200 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-blue-500">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold flex items-center text-blue-800 dark:text-blue-500">
          <Funnel className="h-5 w-5 mr-2 text-party-purple dark:text-party-teal" />
          Filter Artists
        </h3>
        {activeFilters.length > 0 && (
          <button 
            onClick={() => router.push('/artists')}
            className="text-sm flex items-center text-party-pink hover:text-party-purple dark:text-party-teal dark:hover:text-party-blue"
            aria-label="Clear all filters"
          >
            <X className="h-4 w-4 mr-1 text-blue-800 dark:text-blue-200" />
            Clear all
          </button>
        )}
      </div>
      
      {/* Active filters chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeFilters.map((filter) => (
            <span 
              key={`${filter.name}-${filter.value}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-party-teal/10 text-party-teal dark:bg-party-teal/20 dark:text-party-teal"
            >
              {filter.name}: {filter.value}
              <button 
                onClick={() => handleFilterChange(filter.name.toLowerCase(), '')}
                className="ml-1.5 inline-flex text-blue-800 hover:text-blue-500 dark:text-blue-200 dark:hover:text-blue-400"
                aria-label={`Remove ${filter.name} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <label 
            htmlFor="category" 
            className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2"
          >
            Category
          </label>
          <select 
            id="category"
            onChange={(e) => handleFilterChange('category', e.target.value)}
            value={searchParams.get('category') || ''}
            className="block w-full pl-3 pr-10 py-2 text-base border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-party-purple focus:border-party-purple dark:focus:ring-party-teal dark:focus:border-party-teal sm:text-sm rounded-md bg-white dark:bg-blue-700 text-blue-900 dark:text-blue-200"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label 
            htmlFor="location" 
            className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2"
          >
            Location
          </label>
          <select 
            id="location"
            onChange={(e) => handleFilterChange('location', e.target.value)}
            value={searchParams.get('location') || ''}
            className="block w-full pl-3 pr-10 py-2 text-base border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-party-purple focus:border-party-purple dark:focus:ring-party-teal dark:focus:border-party-teal sm:text-sm rounded-md bg-white dark:bg-blue-700 text-blue-900 dark:text-blue-200"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label 
            htmlFor="price" 
            className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2"
          >
            Price Range
          </label>
          <select 
            id="price"
            onChange={(e) => handleFilterChange('price', e.target.value)}
            value={searchParams.get('price') || ''}
            className="block w-full pl-3 pr-10 py-2 text-base border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-party-purple focus:border-party-purple dark:focus:ring-party-teal dark:focus:border-party-teal sm:text-sm rounded-md bg-white dark:bg-blue-700 text-blue-900 dark:text-blue-200"
          >
            <option value="">Any Price</option>
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}