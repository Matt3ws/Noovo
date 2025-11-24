'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Åbn/luk menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-left">
            <span className="text-xl font-bold">
              Noovo<span className="text-primary">.</span>
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-6">
          <Link href="#kunder" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
            Kunder
          </Link>
          <Link href="#services" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
            Services
          </Link>
          <Link href="#process" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
            Proces
          </Link>
          <Link href="#contact" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={handleLinkClick}>
            Kontakt
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
