'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Property {
  id: number;
  emoji: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

const properties: Property[] = [
  {
    id: 1,
    emoji: '🏡',
    price: '$850,000',
    address: '123 Maple Street, San Francisco, CA',
    beds: 3,
    baths: 2,
    sqft: 2100,
  },
  {
    id: 2,
    emoji: '🏢',
    price: '$650,000',
    address: '456 Oak Avenue, Oakland, CA',
    beds: 2,
    baths: 2,
    sqft: 1400,
  },
  {
    id: 3,
    emoji: '🏘️',
    price: '$1,200,000',
    address: '789 Pine Road, Berkeley, CA',
    beds: 4,
    baths: 3,
    sqft: 2800,
  },
];

export default function Home() {
  const [searchCity, setSearchCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger search logic
    console.log('Searching:', { searchCity, propertyType, priceRange });
    alert('Search functionality would be implemented here!');
  };

  return (
    <>
      <section className="hero">
        <h1>Find Your Dream Home Today</h1>
        <p>Discover the perfect property that matches your lifestyle and budget</p>

        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter city, zip, or address"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="search-input"
          />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="search-select"
          >
            <option value="">All Property Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="search-select"
          >
            <option value="">Price Range</option>
            <option value="under-500k">Under $500K</option>
            <option value="500k-1m">$500K - $1M</option>
            <option value="over-1m">Over $1M</option>
          </select>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </section>

      <section className="properties-section">
        <h2 className="section-title">Featured Properties</h2>
        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="view-all">
          <Link href="/listings" className="view-all-link">
            View All Properties →
          </Link>
        </div>
      </section>
    </>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="property-card">
      <div className="property-image">{property.emoji}</div>
      <div className="property-details">
        <div className="property-price">{property.price}</div>
        <div className="property-address">{property.address}</div>
        <div className="property-features">
          <span className="feature">
            🛏️ {property.beds} Bed
          </span>
          <span className="feature">
            🚿 {property.baths} Bath
          </span>
          <span className="feature">
            📐 {property.sqft.toLocaleString()} sqft
          </span>
        </div>
        <Link href={`/listings`} className="contact-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
