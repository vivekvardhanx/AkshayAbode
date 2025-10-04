import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Akshay Hostel 🏠 | Comfortable Living for Students",
  description: "Akshay Hostel offers comfortable, safe, and affordable accommodation for students. Experience a peaceful stay close to campus.",
  openGraph: {
    title: 'Akshay Hostel 🏠',
    description: 'Comfortable Living for Students. Akshay Hostel provides a secure and friendly atmosphere for student life.',
    type: 'website',
    // You should replace this with your actual domain when you deploy.
    // I'll also use a placeholder for the image.
    url: 'https://yourdomain.com',
    images: [
      {
        url: 'https://picsum.photos/seed/hostel-banner/1200/630',
        width: 1200,
        height: 630,
        alt: 'Akshay Hostel Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay Hostel 🏠',
    description: 'Comfortable Living for Students.',
    images: ['https://picsum.photos/seed/hostel-banner/1200/630'],
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '600']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`} suppressHydrationWarning>
      <head>
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
