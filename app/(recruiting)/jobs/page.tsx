import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, GraduationCap, Star } from "lucide-react"
import Link from "next/link"

const candidateProfiles = [
  {
    id: 1,
    title: "Industriemechaniker (m/w/d)",
    experience: "10 Jahre Berufserfahrung",
    location: "München",
    availability: "Sofort verfügbar",
    skills: ["CNC-Programmierung", "Wartung", "Qualitätskontrolle", "Teamleitung"],
    education: "Ausbildung + Meisterbrief",
    description: "Erfahrener Industriemechaniker mit Spezialisierung auf CNC-Maschinen und Teamführung.",
    rating: 5,
  },
  {
    id: 2,
    title: "Softwareentwickler (m/w/d)",
    experience: "5 Jahre Berufserfahrung",
    location: "Berlin",
    availability: "Ab 01.03.2024",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    education: "Bachelor Informatik",
    description: "Full-Stack Entwickler mit Fokus auf moderne Web-Technologien und Cloud-Infrastruktur.",
    rating: 5,
  },
  {
    id: 3,
    title: "Projektmanager (m/w/d)",
    experience: "8 Jahre Berufserfahrung",
    location: "Hamburg",
    availability: "Flexibel",
    skills: ["Agile Methoden", "Stakeholder Management", "Budget-Planung", "Team-Führung"],
    education: "Master BWL + PMP Zertifikat",
    description: "Erfahrener Projektmanager mit Expertise in agilen Methoden und internationalen Projekten.",
    rating: 5,
  },
  {
    id: 4,
    title: "Buchhalterin (m/w/d)",
    experience: "12 Jahre Berufserfahrung",
    location: "Köln",
    availability: "Sofort verfügbar",
    skills: ["DATEV", "Jahresabschluss", "Steuerrecht", "SAP"],
    education: "Ausbildung + Bilanzbuchhalter",
    description: "Erfahrene Buchhalterin mit umfassender Expertise in Finanzbuchhaltung und Steuerrecht.",
    rating: 5,
  },
  {
    id: 5,
    title: "Marketing Manager (m/w/d)",
    experience: "6 Jahre Berufserfahrung",
    location: "Frankfurt",
    availability: "Ab 15.02.2024",
    skills: ["Digital Marketing", "SEO/SEA", "Content Strategy", "Analytics"],
    education: "Master Marketing",
    description: "Kreativer Marketing Manager mit starkem Fokus auf digitale Strategien und Datenanalyse.",
    rating: 4,
  },
  {
    id: 6,
    title: "Vertriebsleiter (m/w/d)",
    experience: "15 Jahre Berufserfahrung",
    location: "Stuttgart",
    availability: "Nach Absprache",
    skills: ["B2B Vertrieb", "Key Account Management", "Team-Aufbau", "CRM"],
    education: "Diplom Betriebswirtschaft",
    description: "Erfahrener Vertriebsprofi mit nachweislichen Erfolgen im B2B-Bereich und Teamaufbau.",
    rating: 5,
  },
]

export default function JobsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Unsere <span className="text-primary">Kandidaten</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Entdecken Sie eine Auswahl unserer qualifizierten Kandidaten. Alle Profile wurden sorgfältig geprüft und
              sind sofort oder kurzfristig verfügbar.
            </p>
            <Button size="lg" asChild>
              <Link href="/fragebogen">Passende Kandidaten anfragen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="px-4 py-2">
              Alle Bereiche
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              IT & Technik
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Kaufmännisch
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Produktion
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Management
            </Badge>
          </div>
        </div>
      </section>

      {/* Candidate Profiles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidateProfiles.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-balance">{candidate.title}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < candidate.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{candidate.description}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>{candidate.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{candidate.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{candidate.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{candidate.education}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Kernkompetenzen:</h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full" asChild>
                    <Link href="/contact">Profil anfordern</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unsere Erfolge in Zahlen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diese Zahlen sprechen für die Qualität unserer Arbeit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Erfolgreiche Vermittlungen</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">14</div>
                <p className="text-sm text-muted-foreground">Tage durchschnittliche Besetzungszeit</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <p className="text-sm text-muted-foreground">Zufriedenheitsrate unserer Kunden</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">200+</div>
                <p className="text-sm text-muted-foreground">Partnerunternehmen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Finden Sie Ihren perfekten Kandidaten</h2>
            <p className="text-xl mb-8 opacity-90">
              Lassen Sie uns gemeinsam den idealen Mitarbeiter für Ihr Unternehmen finden. Starten Sie noch heute Ihre
              Anfrage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/fragebogen">Kandidaten anfragen</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/contact">Beratung vereinbaren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
