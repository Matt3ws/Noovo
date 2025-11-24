import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, ShoppingBag, Zap, CheckCircle, Users, BarChart, Terminal, Globe, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileMenu } from '@/components/mobile-menu';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">
              Noovo<span className="text-emerald-500">.</span>
            </span>
          </div>
          <nav className="hidden">
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Løsninger
            </Link>
            <Link href="#process" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Proces
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileMenu />
            <ThemeToggle />
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="#contact">Kontakt os</Link>
            </Button>
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Link href="#contact">Få et tilbud</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-background to-background dark:from-zinc-900 dark:via-background dark:to-background z-0"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-0"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid gap-8 xl:grid-cols-[1fr_600px] xl:gap-12">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center max-w-max space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                  <span>Webshops & websites</span>
                </div>
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Vi bygger webshops og hjemmesider, der er nemme at bruge</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Vi designer og udvikler Shopify webshops og professionelle hjemmesider, der er lette at vedligeholde og klar til at skabe salg.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <Link href="#contact">
                      Få et uforpligtende tilbud <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#services">Se løsninger</Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Nemt at bruge</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Hurtig levering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Fast og fair pris</span>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-xl border border-border bg-muted/50 p-2">
                <div className="absolute top-2 left-2 right-2 flex h-6 items-center space-x-2 rounded-t-md bg-muted px-3">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-muted-foreground">noovo.dk</div>
                </div>
                <div className="mt-6 h-[458px] w-full overflow-hidden rounded-md">
                  <Image src="/tech-code-interface.png" width={550} height={550} alt="Visualisering af kodeinterface" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/20 via-muted/50 to-muted/50 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
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
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-card">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-emerald-500">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Shopify webshops</h3>
                  <p className="text-muted-foreground">Få en brugervenlig webshop, der er nem at administrere og klar til at sælge.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Mobilvenlig</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">SEO‑klar</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Let at opdatere
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-card">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-emerald-500">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Shopify-udvikling</h3>
                  <p className="text-muted-foreground">Tilpasninger, integrationer og funktioner til din nuværende Shopify‑butik, så den matcher dine behov.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Tilpasninger</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Integrationer
                    </span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Automatisering
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-card">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-emerald-500">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Hjemmesider</h3>
                  <p className="text-muted-foreground">
                    Moderne, hurtige og sikre hjemmesider, der præsenterer din virksomhed professionelt – både på mobil og desktop.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Design</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Mobilvenlig</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      Let at opdatere
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-card">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-emerald-500">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Support & vedligeholdelse</h3>
                  <p className="text-muted-foreground">
                    Vi holder siden kørende, hjælper med små og store ændringer og rådgiver om, hvad der giver mest værdi.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Drift</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Vedligehold</span>
                    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">Rådgivning</span>
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
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
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
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:border-emerald-500/50"
                >
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
                    <Button variant="link" className="mt-2 p-0 text-emerald-500 hover:text-emerald-400">
                      Se case <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/10 via-background to-background z-0"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Proces</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sådan arbejder vi</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">{step.icon}</div>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="hidden w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
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
                  className="flex flex-col justify-between rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-emerald-500/50"
                >
                  <div>
                    <div className="flex gap-0.5 text-emerald-500">
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

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/20 via-muted/50 to-muted/50 z-0"></div>
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 relative z-10 mx-auto">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm text-emerald-500">
                <span>Kontakt os</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skal vi hjælpe jer i gang?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">Fortæl kort om jeres behov – vi vender hurtigt tilbage med forslag og pris.</p>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-emerald-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Skriv til os</p>
                    <p className="font-medium">hello@noovo.dk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Fornavn
                    </label>
                    <Input id="first-name" placeholder="Indtast dit fornavn" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Efternavn
                    </label>
                    <Input id="last-name" placeholder="Indtast dit efternavn" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    E‑mail
                  </label>
                  <Input id="email" type="email" placeholder="Indtast din e‑mail" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project-type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Projekttype
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50">
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
                  <Textarea id="message" placeholder="Fortæl os om dit projekt" className="min-h-[120px] bg-background/50" />
                </div>
              </div>
              <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                Send besked
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <p className="text-sm font-medium">© {new Date().getFullYear()} Noovo. Alle rettigheder forbeholdes.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Privatlivspolitik
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Vilkår for tjenesten
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
              Karriere
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
