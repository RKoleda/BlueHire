"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DankePage() {
  const [contactData, setContactData] = useState<{ name: string; company: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Get form data from localStorage
    const step1Data = localStorage.getItem("fragebogen-step1")
    const step2Data = localStorage.getItem("fragebogen-step2")

    if (!step1Data || !step2Data) {
      router.push("/fragebogen")
      return
    }

    const parsedStep1 = JSON.parse(step1Data)
    setContactData({
      name: parsedStep1.name,
      company: parsedStep1.company,
    })

    // Clear localStorage after successful submission
    localStorage.removeItem("fragebogen-step1")
    localStorage.removeItem("fragebogen-step2")
  }, [router])

  if (!contactData) {
    return null // or loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Vielen Dank für Ihre Anfrage!</h1>
            <p className="text-lg text-muted-foreground">
              Hallo {contactData.name}, wir haben Ihre Recruiting-Anfrage für {contactData.company} erhalten.
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="mb-8">
            <CardContent className="p-8 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Was passiert als nächstes?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                      1
                    </div>
                    <p className="font-medium">Prüfung Ihrer Anfrage</p>
                    <p className="text-muted-foreground">Wir analysieren Ihre Anforderungen</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                      2
                    </div>
                    <p className="font-medium">Persönlicher Kontakt</p>
                    <p className="text-muted-foreground">Wir rufen Sie innerhalb von 24h an</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                      3
                    </div>
                    <p className="font-medium">Kandidatensuche</p>
                    <p className="text-muted-foreground">Wir starten die aktive Suche</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-primary font-medium mb-4">Wir melden uns innerhalb von 24 Stunden bei Ihnen!</p>
                <p className="text-sm text-muted-foreground">
                  Sollten Sie dringende Fragen haben, können Sie uns gerne direkt kontaktieren.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Sofort anrufen</h3>
                  <p className="text-sm text-muted-foreground">+49 (0) 123 456 789</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center space-x-4 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">E-Mail schreiben</h3>
                  <p className="text-sm text-muted-foreground">kontakt@bluehire.de</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/">
                Zur Startseite
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
              <Link href="/jobs">Kandidaten ansehen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
