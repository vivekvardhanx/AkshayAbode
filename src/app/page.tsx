import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-8 md:py-16">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline leading-tight">
          Welcome to <span className="text-primary">Akshay Abode</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your home away from home. We provide a comfortable, safe, and modern
          living experience for students and young professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/rooms">
              Explore Rooms <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <div className="w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden border mt-8">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="Hostel Banner"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          priority
          data-ai-hint="hostel building exterior"
        />
      </div>
    </div>
  );
}
