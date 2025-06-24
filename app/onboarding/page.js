'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required').min(50, 'Bio must be at least 50 characters'),
  categories: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  feeRange: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required'),
});

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const categories = ['Singer', 'Dancer', 'Speaker', 'DJ', 'Magician', 'Comedian'];
  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Other'];
  const feeRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Over ₹1,00,000',
  ];

  const onSubmit = (data) => {
    console.log({
      ...data,
      categories: selectedCategories,
      languages: selectedLanguages,
    });
    alert('Form submitted successfully!');
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleLanguage = (language) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language) 
        : [...prev, language]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Artist Onboarding</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Information</h2>
            
            <div>
              <label className="block mb-1">Full Name</label>
              <input 
                {...register('name')}
                className="w-full p-2 border rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Bio</label>
              <textarea 
                {...register('bio')}
                rows={4}
                className="w-full p-2 border rounded"
              />
              {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
            </div>
            
            <button 
              type="button" 
              onClick={() => setStep(2)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Artist Details</h2>
            
            <div>
              <label className="block mb-1">Categories</label>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category)}
                      className={`w-5 h-5 border rounded mr-2 flex items-center justify-center ${
                        selectedCategories.includes(category) ? 'bg-blue-500 border-blue-500' : ''
                      }`}
                    >
                      {selectedCategories.includes(category) && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <span>{category}</span>
                  </div>
                ))}
              </div>
              {errors.categories && <p className="text-red-500 text-sm">{errors.categories.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Languages Spoken</label>
              <div className="space-y-2">
                {languages.map(language => (
                  <div key={language} className="flex items-center">
                    <button
                      type="button"
                      onClick={() => toggleLanguage(language)}
                      className={`w-5 h-5 border rounded mr-2 flex items-center justify-center ${
                        selectedLanguages.includes(language) ? 'bg-blue-500 border-blue-500' : ''
                      }`}
                    >
                      {selectedLanguages.includes(language) && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <span>{language}</span>
                  </div>
                ))}
              </div>
              {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Fee Range</label>
              <select 
                {...register('feeRange')}
                className="w-full p-2 border rounded"
              >
                <option value="">Select fee range</option>
                {feeRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
            </div>
            
            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Back
              </button>
              <button 
                type="button" 
                onClick={() => setStep(3)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location & Final Details</h2>
            
            <div>
              <label className="block mb-1">Location (City, Country)</label>
              <input 
                {...register('location')}
                className="w-full p-2 border rounded"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>
            
            <div>
              <label className="block mb-1">Profile Image (Optional)</label>
              <input 
                type="file"
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={() => setStep(2)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Back
              </button>
              <button 
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}