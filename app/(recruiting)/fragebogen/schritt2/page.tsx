"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Schritt2Page() {
  const [formData, setFormData] = useState({
    position: "",
    startDate: "",
    qualifications: "",
    additionalInfo: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  useEffect(() => {
    // Check if step 1 data exists
    const step1Data = localStorage.getItem("fragebogen-step1")
    if (!step1Data) {
      router.push("/fragebogen")
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.position.trim()) {
      newErrors.position = "Position ist erforderlich"
    }
    if (!formData.startDate) {
      newErrors.startDate = "Starttermin ist erforderlich"
    }
    if (!formData.qualifications.trim()) {
      newErrors.qualifications = "Qualifikationen sind erforderlich"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Store form data in localStorage
      localStorage.setItem("fragebogen-step2", JSON.stringify(formData))
      router.push("/fragebogen/danke")
    }
  }

  const handleBack = () => {
    router.push("/fragebogen")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 to-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Schritt 2 von 3</span>
              <span className="text-sm font-medium text-muted-foreground">67%</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Ihre Anforderungen</h1>
            <p className="text-lg text-muted-foreground">
              Beschreiben Sie die gesuchte Position und Ihre Wunschqualifikationen.
            </p>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Stellendetails</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="position">Gesuchte Position *</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="z.B. Softwareentwickler, Projektmanager, Buchhalterin"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={errors.position ? "border-destructive" : ""}
                  />
                  {errors.position && <p className="text-sm text-destructive">{errors.position}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Gewünschter Starttermin *</Label>
                  <Select onValueChange={(value) => handleSelectChange("startDate", value)}>
                    <SelectTrigger className={errors.startDate ? "border-destructive" : ""}>
                      <SelectValue placeholder="Wählen Sie einen Starttermin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sofort">Sofort</SelectItem>
                      <SelectItem value="1-monat">In 1 Monat</SelectItem>
                      <SelectItem value="2-monate">In 2 Monaten</SelectItem>
                      <SelectItem value="3-monate">In 3 Monaten</SelectItem>
                      <SelectItem value="flexibel">Flexibel</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.startDate && <p className="text-sm text-destructive">{errors.startDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qualifications">Wunschqualifikationen *</Label>
                  <Textarea
                    id="qualifications"
                    name="qualifications"
                    placeholder="Beschreiben Sie die gewünschten Qualifikationen, Erfahrungen und Fähigkeiten..."
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    className={`min-h-[120px] ${errors.qualifications ? "border-destructive" : ""}`}
                  />
                  {errors.qualifications && <p className="text-sm text-destructive">{errors.qualifications}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Zusätzliche Informationen</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Weitere wichtige Informationen zu der Position, Ihrem Unternehmen oder besonderen Anforderungen..."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="px-8 bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Zurück
                  </Button>
                  <Button type="submit" size="lg" className="px-8">
                    Anfrage absenden
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
