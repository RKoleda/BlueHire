import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Target, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Wir finden Ihre <span className="text-primary">neuen Mitarbeiter</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Professionelle Recruiting-Agentur für Unternehmen. Schnell, zuverlässig und passgenau zu den richtigen
              Kandidaten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/fragebogen">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                <Link href="/contact">Kostenloses Gespräch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Warum BlueHire?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wir bringen Sie schnell und zuverlässig mit den passenden Kandidaten zusammen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Schnell</h3>
                <p className="text-muted-foreground">In durchschnittlich 14 Tagen zu passenden Bewerbern</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Zuverlässig</h3>
                <p className="text-muted-foreground">Persönlicher Ansprechpartner von Tag 1 an</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Passgenau</h3>
                <p className="text-muted-foreground">Nur Kandidaten, die zu Ihrem Unternehmen passen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">So funktioniert's</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In nur 3 einfachen Schritten zu Ihren neuen Mitarbeitern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Kostenloses Erstgespräch</h3>
              <p className="text-muted-foreground">Wir lernen Ihr Unternehmen und Ihre Anforderungen kennen</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Kandidatensuche & Vorauswahl</h3>
              <p className="text-muted-foreground">Wir finden und prüfen passende Kandidaten für Sie</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Vorstellung und Einstellung</h3>
              <p className="text-muted-foreground">Sie lernen die besten Kandidaten kennen und entscheiden</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 lg:p-12">
              <CardContent className="space-y-6">
                <div className="text-4xl text-primary">"</div>
                <blockquote className="text-xl lg:text-2xl text-balance">
                  Dank BlueHire haben wir innerhalb von 2 Wochen zwei neue Fachkräfte gefunden. Der Service war
                  professionell und die Kandidaten passten perfekt zu unserem Team.
                </blockquote>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <cite className="text-muted-foreground font-medium">— Müller GmbH, Geschäftsführung</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bereit für neue Mitarbeiter?</h2>
            <p className="text-xl mb-8 opacity-90">
              Starten Sie noch heute Ihre unverbindliche Anfrage und finden Sie die passenden Kandidaten für Ihr
              Unternehmen.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/fragebogen">
                Jetzt unverbindlich anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
