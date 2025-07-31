import { getRooms, type Room } from '@/lib/rooms';
import { RoomCard } from '@/components/RoomCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export const metadata = {
  title: 'Our Rooms - Akshay Abode',
  description: 'Explore the variety of rooms we offer at Akshay Abode.',
};

async function RoomsList() {
    const rooms = await getRooms();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room: Room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    );
}

function RoomsListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3 rounded-lg border bg-card p-4">
                    <Skeleton className="h-[200px] w-full rounded-md" />
                    <div className="space-y-4 pt-2">
                        <div className='flex justify-between'>
                            <Skeleton className="h-6 w-1/2" />
                            <Skeleton className="h-6 w-1/4" />
                        </div>
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                     <Skeleton className="h-10 w-full mt-4" />
                </div>
            ))}
        </div>
    )
}

export default function RoomsPage() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">Our Rooms</h1>
                <p className="text-lg text-muted-foreground">Find the perfect space that suits your needs and budget.</p>
            </div>
            <Suspense fallback={<RoomsListSkeleton />}>
                <RoomsList />
            </Suspense>
        </div>
    );
}
