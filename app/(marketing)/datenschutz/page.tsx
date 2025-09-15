import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
              <span className="text-primary">Datenschutz</span>erklärung
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir Ihre Daten schützen und verwenden.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Verantwortlicher</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="font-medium">BlueHire GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>
                  <p className="mt-2">
                    <strong>E-Mail:</strong> datenschutz@bluehire.de
                  </p>
                  <p>
                    <strong>Telefon:</strong> +49 (0) 123 456 789
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Erhebung und Speicherung personenbezogener Daten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">2.1 Beim Besuch der Website</h4>
                <p>
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
                  automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär
                  in einem sog. Logfile gespeichert.
                </p>
                <p>
                  Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
                  gespeichert:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                </ul>

                <h4 className="font-semibold mt-6">2.2 Bei der Nutzung unserer Kontaktformulare</h4>
                <p>Bei der Nutzung unserer Kontaktformulare erheben wir folgende personenbezogene Daten:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name und Vorname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Firmenname</li>
                  <li>Nachrichteninhalt</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Zweck der Datenverarbeitung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Die Verarbeitung der personenbezogenen Daten erfolgt zu folgenden Zwecken:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bereitstellung der Website und Gewährleistung der Funktionalität</li>
                  <li>Gewährleistung der Systemsicherheit und -stabilität</li>
                  <li>Bearbeitung von Anfragen und Kontaktaufnahme</li>
                  <li>Recruiting-Dienstleistungen und Kandidatenvermittlung</li>
                  <li>Optimierung unserer Website</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Rechtsgrundlage für die Datenverarbeitung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                  berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung.
                </p>
                <p>
                  Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung einholen, dient Art. 6
                  Abs. 1 lit. a DSGVO als Rechtsgrundlage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Dauer der Speicherung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                  erforderlich sind. Für die personenbezogenen Daten aus dem Kontaktformular ist dies dann der Fall,
                  wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.
                </p>
                <p>
                  Die während des Besuchs der Website erhobenen Daten werden gelöscht, wenn die jeweilige Sitzung
                  beendet ist.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Ihre Rechte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                  <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
                  <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <strong>datenschutz@bluehire.de</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
                  werden. Einige Cookies sind erforderlich, um die Funktionalität unserer Website zu gewährleisten
                  (technisch notwendige Cookies).
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                  Cookies nur im Einzelfall erlauben oder die Annahme von Cookies generell ausschließen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. SSL-Verschlüsselung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte
                  eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                  Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Änderungen der Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                </p>
                <p>
                  <strong>Stand:</strong> Januar 2024
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
