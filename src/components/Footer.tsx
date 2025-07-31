"use client";

import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Akshay Boys Hostel. All rights reserved.</p>
      </div>
    </footer>
  );
}
