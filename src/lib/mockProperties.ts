export interface Property {
  id: number;
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

export const mockProperties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    price: '$850,000',
    address: '123 Maple Street, San Francisco, CA',
    beds: 3,
    baths: 2,
    sqft: 2100,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    price: '$650,000',
    address: '456 Oak Avenue, Oakland, CA',
    beds: 2,
    baths: 2,
    sqft: 1400,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1570129947423-1c5c6f5f7e4e?w=800',
    price: '$1,200,000',
    address: '789 Pine Road, Berkeley, CA',
    beds: 4,
    baths: 3,
    sqft: 2800,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    price: '$2,500,000',
    address: '321 Sunset Boulevard, Malibu, CA',
    beds: 5,
    baths: 4,
    sqft: 4200,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600596542815-2a429feb0125?w=800',
    price: '$950,000',
    address: '567 Valley View, San Jose, CA',
    beds: 3,
    baths: 3,
    sqft: 2500,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=800',
    price: '$750,000',
    address: '890 Market Street, San Francisco, CA',
    beds: 2,
    baths: 2,
    sqft: 1600,
  },
];
