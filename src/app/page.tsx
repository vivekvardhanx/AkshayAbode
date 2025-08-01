import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Wifi, UtensilsCrossed, WashingMachine, Tv, Bath } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const amenities = [
  { icon: Wifi, text: "High-Speed Wi-Fi" },
  { icon: UtensilsCrossed, text: "Mess Facility" },
  { icon: WashingMachine, text: "Laundry Service" },
  { icon: Bath, text: "Hot Water Facility" },
];


export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-cyan-400 rounded-xl text-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Welcome to <span className="text-accent">Akshay Boys Hostel</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground max-w-2xl mx-auto">
              Premium boys hostel with modern amenities and comfortable living spaces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/rooms">View Rooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Akshay Boys Hostel?</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            Experience comfortable living with premium amenities designed for students and young professionals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit">
                    <amenity.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">{amenity.text}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
