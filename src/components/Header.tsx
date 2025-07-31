"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BedDouble, Menu, Home, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/rooms", label: "Rooms", icon: BedDouble },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({
    href,
    label,
    icon: Icon,
    className,
  }: {
    href: string;
    label: string;
    icon: React.ElementType;
    className?: string;
  }) => {
    const isActive = pathname === href;
    return(
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted/50 hover:text-foreground",
          className
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="bg-primary/80 p-2 rounded-md">
            <BedDouble className="h-6 w-6 text-white" />
          </div>
          <span>Akshay Boys Hostel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 text-sm">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-6">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-bold text-lg mb-4"
                >
                  <div className="bg-primary/80 p-2 rounded-md">
                    <BedDouble className="h-6 w-6 text-white" />
                  </div>
                  <span>Akshay Boys Hostel</span>
                </Link>
                {navItems.map((item) => (
                  <NavLink key={item.href} {...item} className="text-base" />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
