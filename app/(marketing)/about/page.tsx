import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Über <span className="text-primary">BlueHire</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Wir bringen Unternehmen und Menschen zusammen, die zueinander passen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unsere Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Bei BlueHire verstehen wir, dass der Erfolg eines Unternehmens maßgeblich von den richtigen
                  Mitarbeitern abhängt. Deshalb haben wir es uns zur Aufgabe gemacht, Unternehmen dabei zu helfen, die
                  perfekten Kandidaten zu finden.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Mit unserer langjährigen Erfahrung im Recruiting und unserem tiefen Verständnis für verschiedene
                  Branchen sorgen wir dafür, dass Sie nicht nur qualifizierte, sondern auch kulturell passende
                  Mitarbeiter finden.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Jetzt kennenlernen</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-secondary/30 rounded-2xl flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Zuverlässigkeit</h3>
                <p className="text-sm text-muted-foreground">Wir halten unsere Versprechen und sind immer für Sie da</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Transparenz</h3>
                <p className="text-sm text-muted-foreground">
                  Offene Kommunikation und ehrliche Beratung stehen im Mittelpunkt
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Effizienz</h3>
                <p className="text-sm text-muted-foreground">Schnelle Ergebnisse ohne Kompromisse bei der Qualität</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Menschlichkeit</h3>
                <p className="text-sm text-muted-foreground">
                  Jeder Kandidat und jedes Unternehmen verdient individuelle Betreuung
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unser Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Erfahrene Recruiting-Experten mit Leidenschaft für Menschen und Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Sarah Müller</h3>
                <p className="text-sm text-primary font-medium">Geschäftsführerin</p>
                <p className="text-sm text-muted-foreground">
                  15 Jahre Erfahrung im Executive Search und Personalberatung
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Michael Schmidt</h3>
                <p className="text-sm text-primary font-medium">Senior Recruiter</p>
                <p className="text-sm text-muted-foreground">Spezialist für technische Fachkräfte und IT-Positionen</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Anna Weber</h3>
                <p className="text-sm text-primary font-medium">Recruiting Consultant</p>
                <p className="text-sm text-muted-foreground">
                  Expertin für kaufmännische und administrative Positionen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Lernen Sie uns kennen</h2>
            <p className="text-xl mb-8 opacity-90">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihnen helfen können.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
