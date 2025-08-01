import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { MapEmbed } from "@/components/MapEmbed";
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - Akshay Boys Hostel',
  description: 'Get in touch with us for enquiries and location details.',
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
        <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">We're here to help. Contact us with any questions or to schedule a visit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Card className="shadow-lg transition-shadow hover:shadow-xl">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <Phone className="h-6 w-6 text-primary" />
                            Contact Details
                        </CardTitle>
                        <CardDescription>Reach out to us via phone or WhatsApp.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-lg">
                        <div className="flex items-center gap-4">
                            <Phone className="h-5 w-5 text-muted-foreground" />
                            <span>+91 76718 11698</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MessageCircle className="h-5 w-5 text-muted-foreground" />
                            <span>+91 76718 11698</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                             <Button asChild className="w-full" size="lg">
                                <Link href="tel:+917671811698">
                                    <Phone className="mr-2 h-5 w-5" /> Call Now
                                </Link>
                            </Button>
                            <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white" size="lg">
                                <Link href="https://wa.me/917671811698" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

             <Card className="lg:col-span-3 shadow-lg transition-shadow hover:shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <MapPin className="h-6 w-6 text-primary" />
                        Our Location
                    </CardTitle>
                     <CardDescription>
                        123, Hostel Lane, Knowledge Park, Near ABC University, New Delhi, India 110001
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <MapEmbed />
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
