import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              Kontakt <span className="text-primary">aufnehmen</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Lassen Sie uns über Ihre Recruiting-Anforderungen sprechen. Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                <p className="text-muted-foreground mb-8">
                  Wir sind für Sie da und melden uns schnellstmöglich bei Ihnen zurück.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-muted-foreground">+49 (0) 123 456 789</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">E-Mail</h3>
                      <p className="text-muted-foreground">kontakt@bluehire.de</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Adresse</h3>
                      <p className="text-muted-foreground">
                        Musterstraße 123
                        <br />
                        12345 Musterstadt
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Mo-Fr: 9:00 - 18:00 Uhr
                        <br />
                        Sa: 10:00 - 14:00 Uhr
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Häufige Fragen</h2>
              <p className="text-xl text-muted-foreground">Antworten auf die wichtigsten Fragen zu unserem Service</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Wie lange dauert der Recruiting-Prozess?</h3>
                  <p className="text-muted-foreground">
                    In der Regel finden wir innerhalb von 14 Tagen passende Kandidaten für Ihre Position. Je nach
                    Anforderungen kann dies variieren.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Welche Kosten entstehen?</h3>
                  <p className="text-muted-foreground">
                    Das Erstgespräch ist kostenlos. Die Vergütung erfolgt erfolgsbasiert - Sie zahlen nur bei
                    erfolgreicher Vermittlung.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">In welchen Branchen sind Sie tätig?</h3>
                  <p className="text-muted-foreground">
                    Wir vermitteln in allen Branchen - von IT und Technik über Kaufmännisches bis hin zu
                    Führungspositionen.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">Wie läuft die Zusammenarbeit ab?</h3>
                  <p className="text-muted-foreground">
                    Nach dem Erstgespräch erstellen wir ein Anforderungsprofil und beginnen mit der aktiven
                    Kandidatensuche.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
