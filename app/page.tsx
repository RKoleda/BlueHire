import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Target, BarChart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text links */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transformieren Sie Ihr Recruiting mit <span className="text-secondary">BlueHire</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-xl">
                Wir liefern innovative Recruiting-Lösungen, die Wachstum sichern, Effizienz steigern
                und Ihr Unternehmen langfristig mit den besten Talenten positionieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/fragebogen">
                    Jetzt starten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">Unsere Services</Link>
                </Button>
              </div>
            </div>

            {/* USP-Box rechts – Icon-Kacheln */}
            <Card className="bg-background/90 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Warum BlueHire?</h3>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    Branchenexpertise – Erfahrung mit Mittelstand & Großunternehmen
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    Passgenaue Lösungen – Kandidaten, die wirklich zu Ihnen passen
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    Messbare Ergebnisse – transparente Prozesse & schnelle Besetzungen
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT'S */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">So funktioniert&apos;s</h2>
            <p className="text-lg text-muted-foreground">
              In nur 3 einfachen Schritten zu Ihren neuen Mitarbeitern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-lg">Kostenloses Erstgespräch</h3>
              <p className="text-muted-foreground">Wir lernen Ihr Unternehmen und Ihre Anforderungen kennen.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-lg">Kandidatensuche & Vorauswahl</h3>
              <p className="text-muted-foreground">Wir finden und prüfen passende Kandidaten für Sie.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-lg">Vorstellung und Einstellung</h3>
              <p className="text-muted-foreground">Sie lernen die besten Kandidaten kennen und entscheiden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="shadow-md">
              <CardContent className="p-8 lg:p-10">
                <blockquote className="text-xl lg:text-2xl text-foreground/90 mb-6">
                  „Dank BlueHire haben wir innerhalb von 2&nbsp;Wochen zwei neue Fachkräfte gefunden.
                  Der Service war professionell und die Kandidaten passten perfekt zu unserem Team.“
                </blockquote>
                <p className="text-muted-foreground font-medium">— Müller GmbH, Geschäftsführung</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bereit für neue Mitarbeiter?</h2>
          <p className="text-lg mb-8 opacity-90">
            Starten Sie noch heute Ihre unverbindliche Anfrage und finden Sie die passenden Kandidaten für Ihr Unternehmen.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <Link href="/fragebogen">
              Jetzt unverbindlich anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
