'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState<string | undefined>();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !email || !message) {
      toast({
        title: 'Udfyld venligst de påkrævede felter',
        description: 'Fornavn, e‑mail og besked.',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, projectType, message }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Der opstod en fejl.');
      toast({ title: 'Tak for din besked!', description: 'Vi vender tilbage hurtigst muligt.' });
      setFirstName('');
      setLastName('');
      setEmail('');
      setProjectType(undefined);
      setMessage('');
    } catch (err: unknown) {
      const m = err instanceof Error ? err.message : 'Der opstod en fejl.';
      toast({ title: 'Kunne ikke sende beskeden', description: m });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Fornavn
            </label>
            <Input id="first-name" placeholder="Indtast dit fornavn" className="bg-background/50" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Efternavn
            </label>
            <Input id="last-name" placeholder="Indtast dit efternavn" className="bg-background/50" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            E‑mail
          </label>
          <Input id="email" type="email" placeholder="Indtast din e‑mail" className="bg-background/50" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="project-type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Projekttype
          </label>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger id="project-type" className="bg-background/50">
              <SelectValue placeholder="Vælg projekttype" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="webshop">Ny webshop</SelectItem>
              <SelectItem value="website">Ny hjemmeside</SelectItem>
              <SelectItem value="development">Udvikling/tilpasning</SelectItem>
              <SelectItem value="other">Andet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Besked
          </label>
          <Textarea id="message" placeholder="Fortæl os om dit projekt" className="min-h-[120px] bg-background/50" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
      </div>
      <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
        {isSubmitting ? 'Sender…' : 'Send besked'}
      </Button>
    </form>
  );
}


