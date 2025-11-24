import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, ShoppingBag, Zap, Users, BarChart, Terminal, Globe, Mail } from 'lucide-react';
import Script from 'next/script';

import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/mobile-menu';
import { ContactForm } from '@/components/contact-form';
import { CookieSettingsLink } from '@/components/cookie-settings-link';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Script
        id="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Noovo',
            url: 'https://noovo.dk',
            logo: 'https://noovo.dk/placeholder-logo.png',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'hej@noovo.dk',
                contactType: 'customer support',
                areaServed: 'DK',
                availableLanguage: ['da', 'en'],
              },
            ],
          }),
        }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://noovo.dk',
            name: 'Noovo',
            inLanguage: 'da-DK',
            potentialAction: {
              '@type': 'ContactAction',
              target: 'https://noovo.dk/#contact',
            },
          }),
        }}
      />
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1B1B1B]/80 backdrop-blur supports-[backdrop-filter]:bg-[#1B1B1B]/60">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold">
                Noovo<span className="text-primary">.</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#kunder" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Kunder
              </Link>
              <Link href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Proces
              </Link>
            </nav>
            <div className="hidden md:flex">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Kontakt</Link>
              </Button>
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Shopify webshops og websites, der konverterer – enkelt, hurtigt og professionelt.
              </h1>
              <p className="mt-6 max-w-2xl text-foreground/70 text-lg">
                Vi designer og udvikler e‑commerce løsninger med fokus på performance, driftssikkerhed og vedligeholdelse.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#contact">
                    Få et uforpligtende tilbud <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                  <Link href="#services">Se services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="kunder" className="w-full py-10 border-t border-b border-border scroll-mt-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-between opacity-80">
              <div className="hidden sm:block"></div>
              <Image src="/logos/tbmfilm.svg" alt="TBM Film" width={150} height={52} className="h-6.5 sm:h-10 w-auto grayscale" />
              <Image src="/logos/brdr-omann.png" alt="Murerfirmaet Brdr. Omann" width={150} height={52} className="h-5 sm:h-7.5 w-auto grayscale invert" />
              <Image src="/logos/mam.png" alt="MAM" width={150} height={52} className="h-5 sm:h-7 w-auto grayscale invert" />
              <Image src="/logos/gpo.png" alt="GPO" width={150} height={52} className="h-4 sm:h-6 w-auto grayscale invert" />
              <div className="hidden sm:block"></div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-primary">
                <span>Løsninger</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hvad vi laver</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Vi hjælper virksomheder med webshops og hjemmesider, der er enkle at bruge og skaber resultater.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative overflow-hidden rounded-xl border border-border bg-secondary p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#111111] text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Shopify webshops</h3>
                  <p className="text-foreground/70">Få en brugervenlig webshop, der er nem at administrere og klar til at sælge.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Mobilvenlig</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">SEO‑klar</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Let at opdatere</span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-secondary p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#111111] text-primary">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Shopify-udvikling</h3>
                  <p className="text-foreground/70">Tilpasninger, integrationer og funktioner til din nuværende Shopify‑butik, så den matcher dine behov.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Tilpasninger</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Integrationer</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Automatisering</span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-secondary p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#111111] text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Hjemmesider</h3>
                  <p className="text-foreground/70">
                    Moderne, hurtige og sikre hjemmesider, der præsenterer din virksomhed professionelt – både på mobil og desktop.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Design</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Mobilvenlig</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Let at opdatere</span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-secondary p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#111111] text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Support & vedligeholdelse</h3>
                  <p className="text-foreground/70">Vi holder siden kørende, hjælper med små og store ændringer og rådgiver om, hvad der giver mest værdi.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Drift</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Vedligehold</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">Rådgivning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sektion fjernet for at holde fokus på forretningsværdi fremfor tekniske detaljer */}

        <section id="portfolio" className="hidden w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-primary">
                <span>Cases</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Udvalgte projekter</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Et udvalg af projekter, hvor vi har hjulpet virksomheder med at sælge mere online og stå stærkere digitalt.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'E‑handelsplatform',
                  description: 'En headless Shopify‑butik bygget med Next.js',
                  image: '/placeholder-2zava.png',
                  tags: ['Next.js', 'Shopify', 'Headless'],
                },
                {
                  title: 'SaaS‑dashboard',
                  description: 'Et responsivt dashboard til en SaaS‑applikation',
                  image: '/placeholder-2zava.png',
                  tags: ['React', 'TypeScript', 'Tailwind'],
                },
                {
                  title: 'Shopify‑lagerapp',
                  description: 'Skræddersyet Shopify‑app til lagerstyring',
                  image: '/placeholder-qcpkm.png',
                  tags: ['Shopify App', 'Node.js', 'React'],
                },
                {
                  title: 'Virksomhedssite',
                  description: 'Højtydende Next.js‑website med CMS',
                  image: '/placeholder.svg?height=400&width=600&query=sleek corporate website with dark theme',
                  tags: ['Next.js', 'Sanity CMS', 'TypeScript'],
                },
                {
                  title: 'Produktkonfigurator',
                  description: 'Interaktiv produktkonfigurator til Shopify',
                  image: '/placeholder.svg?height=400&width=600&query=3D product customizer interface dark theme',
                  tags: ['Three.js', 'Shopify', 'WebGL'],
                },
                {
                  title: 'Marketingplatform',
                  description: 'Next.js‑marketingplatform med analyser',
                  image: '/placeholder.svg?height=400&width=600&query=marketing analytics dashboard dark futuristic',
                  tags: ['Next.js', 'Chart.js', 'API'],
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-primary/50">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="mt-2 p-0 text-primary hover:text-primary/80">
                      Se case <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="text-sm uppercase tracking-wider text-foreground/60">Proces</div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sådan arbejder vi</h2>
                <p className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
                  En enkel og gennemsigtig proces fra første snak til lancering – uden teknisk bøvl.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: 'Samtale',
                    description: 'Vi taler om jeres mål og behov og afklarer, hvad der giver mest værdi.',
                    code: '// Initial requirements gathering\nconst projectScope = {\n  goals: [],\n  audience: [],\n  features: []\n}',
                  },
                  {
                    icon: <Code className="h-6 w-6" />,
                    title: 'Design & plan',
                    description: 'Vi præsenterer en løsning, et design og en klar tidsplan og pris.',
                    code: "// System architecture\nconst architecture = {\n  frontend: 'Next.js',\n  backend: 'Node.js',\n  database: 'PostgreSQL'\n}",
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: 'Udvikling',
                    description: 'Vi bygger løsningen og holder jer løbende opdateret – I kan følge med hele vejen.',
                    code: "// Agile sprint planning\nconst sprint = {\n  duration: '2 weeks',\n  tasks: [],\n  deliverables: []\n}",
                  },
                  {
                    icon: <BarChart className="h-6 w-6" />,
                    title: 'Lancering & support',
                    description: 'Når alt er godkendt, går vi i luften – og vi er der også bagefter.',
                    code: "// CI/CD pipeline\ndeploy({\n  environment: 'production',\n  version: '1.0.0',\n  rollback: true\n})",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative rounded-xl border border-border bg-card/50 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-primary">{step.icon}</div>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="hidden w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-primary">
                <span>Kundeudtalelser</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Det siger vores kunder</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Her er, hvad vores kunder siger om samarbejdet med os.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    'Noovo transformede vores online tilstedeværelse med et lynhurtigt Next.js‑website, som markant forbedrede vores konverteringsrater og brugerengagement.',
                  author: 'Sarah Johnson',
                  role: 'CTO, TechCorp',
                  rating: 5,
                },
                {
                  quote:
                    'Deres Shopify‑ekspertise hjalp os med at udvikle en skræddersyet app, der effektiviserede vores lagerstyring og sparede os for utallige timers manuelt arbejde.',
                  author: 'Michael Chen',
                  role: 'E-commerce Director, StyleBoutique',
                  rating: 5,
                },
                {
                  quote:
                    'Samarbejdet med Noovo var en game‑changer for vores startup. De leverede en skalerbar løsning, der fortsat vokser med vores forretningsbehov.',
                  author: 'Alex Rodriguez',
                  role: 'Founder, InnovateSaaS',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/50"
                >
                  <div>
                    <div className="flex gap-0.5 text-primary">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                    </div>
                    <blockquote className="mt-4">
                      <p className="text-muted-foreground">{testimonial.quote}</p>
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 scroll-mt-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 mx-auto">
            <div className="space-y-2">
              <div className="text-sm uppercase tracking-wider text-foreground/60">Kontakt os</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skal vi hjælpe jer i gang?</h2>
              <p className="max-w-[600px] text-foreground/70 md:text-xl">Fortæl kort om jeres behov – vi vender hurtigt tilbage med forslag og pris.</p>
              <div className="mt-6 space-y-4">
                {/* <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-emerald-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ring til os</p>
                    <p className="font-medium">+1 (45) 123-4567</p>
                  </div>
                </div> */}
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Skriv til os</p>
                    <p className="font-medium">hej@noovo.dk</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} Noovo. Alle rettigheder forbeholdes.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Privatlivspolitik
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Vilkår for tjenesten
            </Link>
            <CookieSettingsLink />
          </div>
        </div>
      </footer>
    </div>
  );
}
