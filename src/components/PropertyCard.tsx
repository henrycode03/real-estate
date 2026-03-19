'use client';

import Link from 'next/link';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={property.images[0] || '/api/placeholder/400/300'}
            alt={property.address}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            ${property.price.toLocaleString()}
          </div>
          <div className="text-gray-700 mb-4 line-clamp-2">
            {property.address}, {property.city}
          </div>
          <div className="flex justify-between text-gray-600 text-sm">
            <span className="flex items-center">
              🛏️ {property.beds} bed{property.beds !== 1 ? 's' : ''}
            </span>
            <span className="flex items-center">
              🚿 {property.baths} bath{property.baths !== 1 ? 's' : ''}
            </span>
            <span className="flex items-center">
              📐 {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
