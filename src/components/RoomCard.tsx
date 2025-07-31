import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type Room } from '@/lib/rooms';
import Link from 'next/link';

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
            <Image
              src={room.imageUrl}
              alt={room.name}
              fill
              className="object-cover"
              data-ai-hint={room.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
      </CardHeader>
      <div className="p-6 flex-grow flex flex-col">
        <CardContent className="p-0 flex-grow space-y-4">
            <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-2xl">{room.name}</CardTitle>
                <div className="text-lg font-semibold text-primary whitespace-nowrap">{room.price}</div>
            </div>
            <CardDescription>{room.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 pt-6">
            <Button asChild className="w-full">
                <Link href="/contact">Enquire Now</Link>
            </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
