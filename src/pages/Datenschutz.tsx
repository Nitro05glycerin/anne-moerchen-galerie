import Navigation from '../components/Navigation';

const Datenschutz = () => {
  return (
    <>
      <Navigation />
      
      <main className="gallery-section">
        <div className="gallery-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Datenschutzerklärung
            </h1>
            
            <div className="gallery-card p-8 space-y-8">
              <div>
                <h2 className="font-display text-xl mb-3">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-medium mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                  wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Datenerfassung auf unserer Website</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>
              
              <div>
                <h2 className="font-display text-xl mb-3">2. Hosting und Content Delivery Networks (CDN)</h2>
                <h3 className="font-medium mb-2">Externes Hosting</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). 
                  Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </div>
              
              <div>
                <h2 className="font-display text-xl mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="font-medium mb-2">Datenschutz</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                  sowie dieser Datenschutzerklärung.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-muted-foreground text-sm">
                  Anne Moerchen<br />
                  Galerie & Art Depot<br />
                  Brahmsallee 24<br />
                  20144 Hamburg<br />
                  Telefon: +49 (0)40 27 10 28<br />
                  E-Mail: galerie@galerie-anne-moerchen.de
                </p>
              </div>
              
              <div>
                <h2 className="font-display text-xl mb-3">4. Datenerfassung auf unserer Website</h2>
                <h3 className="font-medium mb-2">Server-Log-Dateien</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Diese sind: Browsertyp und Browserversion, 
                  verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                </p>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Diese Datenschutzerklärung wurde zuletzt am {new Date().toLocaleDateString('de-DE')} aktualisiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Datenschutz;