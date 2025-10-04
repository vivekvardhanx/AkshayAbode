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
      imageUrl: 'https://www.hostelz.com/pics/slp/1077/Best-Hostels-in-Ha%CC%A3-Long-City.jpg',
      imageHint: 'modern bedroom twin',
    },
    {
      id: '2',
      name: '3 Sharing',
      price: '₹8000/month',
      description: 'Ideal for a small group of friends. This room offers a comfortable and collaborative living space.',
      imageUrl: 'https://www.hostelz.com/pics/slp/3186/Best-Hostels-in-Mumbai-for-Female-Solo-Travelers.jpg',
      imageHint: 'bunk beds hostel',
    },
    {
      id: '3',
      name: 'Hall',
      price: '₹7000/month',
      description: 'An economical option in a shared hall space. A vibrant, large room designed for community living.',
      imageUrl: 'https://mytriphack.com/wp-content/uploads/2018/09/After-Story-hostel.jpg',
      imageHint: 'hostel dormitory',
    },
    {
      id: '6',
      name: 'Single Room',
      price: '₹10000/month',
      description: 'For those who prefer their own space. A private room with all necessary amenities for a single occupant.',
      imageUrl: 'https://www.hostelz.com/pics/slp/122/est-Hostels-with-Private-Rooms-in-Budapest.jpg',
      imageHint: 'single bedroom modern',
    },
    {
      id: '7',
      name: 'Parent Room (Temporary)',
      price: 'Contact for price',
      description: 'Available temporary accommodation for parents. Please contact us for availability and pricing.',
      imageUrl: 'https://budgettraveller.org/wp-content/uploads/2015/08/IMG_5250.jpg',
      imageHint: 'guest bedroom hotel',
    },
  ];
}
