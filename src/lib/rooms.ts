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
      price: '₹7000/month',
      description: 'A spacious and well-ventilated room for two, complete with individual beds, study tables, and wardrobes.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'modern bedroom twin',
    },
    {
      id: '2',
      name: '3 Sharing',
      price: '₹6000/month',
      description: 'Ideal for a small group of friends. This room offers a comfortable and collaborative living space.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'bunk beds hostel',
    },
    {
      id: '3',
      name: '4 Sharing',
      price: '₹5000/month',
      description: 'Our most economical option. A vibrant, large room designed for four students, fostering a community feel.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'hostel room quad',
    },
     {
      id: '4',
      name: '2 Sharing (A/C)',
      price: '₹8500/month',
      description: 'Enjoy the comfort of air conditioning in this premium room for two. Perfect for staying cool during the summer.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'luxury twin room',
    },
    {
      id: '5',
      name: '3 Sharing (A/C)',
      price: '₹7500/month',
      description: 'Stay cool and comfortable with your friends. This A/C room is perfect for groups of three.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'triple room hostel',
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
