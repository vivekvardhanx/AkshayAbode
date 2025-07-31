export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Akshay Abode. All rights reserved.</p>
      </div>
    </footer>
  );
}
