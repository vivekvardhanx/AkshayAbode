export type Room = {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// This function mocks a call to Firestore.
// In a real app, you would use the Firebase SDK to fetch this data.
export async function getRooms(): Promise<Room[]> {
  // Simulating network latency
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: '1',
      name: '2 Sharing',
      price: '₹10000/month',
      description: 'A spacious and well-ventilated room for two, complete with individual beds, study tables, and wardrobes.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'modern bedroom twin',
    },
    {
      id: '2',
      name: '3 Sharing',
      price: '₹8000/month',
      description: 'Ideal for a small group of friends. This room offers a comfortable and collaborative living space.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'bunk beds hostel',
    },
    {
      id: '3',
      name: 'Hall',
      price: '₹7000/month',
      description: 'An economical option in a shared hall space. A vibrant, large room designed for community living.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'hostel dormitory',
    },
    {
      id: '6',
      name: 'Single Room',
      price: '₹10000/month',
      description: 'For those who prefer their own space. A private room with all necessary amenities for a single occupant.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'single bedroom modern',
    },
  ];
}
