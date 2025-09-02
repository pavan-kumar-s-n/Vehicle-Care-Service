import { useState } from 'react';
import ServiceCard from '../../assets/Components/ServiceCard';
import SearchBar from '../../assets/Components/SearchBar';

const mockServices = [
  {
    id: 1,
    name: "QuickFix Garage",
    rating: 4.5,
    distance: "1.2 miles",
    service: "Oil Change",
    price: 30,
    duration: "30 mins",
  },
  {
    id: 2,
    name: "ProAuto Care",
    rating: 4.8,
    distance: "0.5 miles",
    service: "Brake Repair",
    price: 80,
    duration: "1 hour",
  },
];

export default function SearchServices() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter services based on search term
  const filteredServices = mockServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Find Services</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          searchQuery={searchTerm}
          setSearchQuery={setSearchTerm}
          handleSearch={() => {}} // optional if you just filter live
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setSearchTerm('')} className="px-3 py-1 bg-gray-200 rounded-full">All</button>
        <button onClick={() => setSearchTerm('Oil Change')} className="px-3 py-1 bg-gray-200 rounded-full">Oil Change</button>
        <button onClick={() => setSearchTerm('Repair')} className="px-3 py-1 bg-gray-200 rounded-full">Repairs</button>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-gray-500">No services found</p>
        )}
      </div>
    </div>
  );
}
