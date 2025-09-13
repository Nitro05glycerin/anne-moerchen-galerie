import Navigation from '../components/Navigation';

const Impressum = () => {
  return (
    <>
      <Navigation />
      
      <main className="gallery-section">
        <div className="gallery-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Impressum
            </h1>
            
            <div className="gallery-card p-8 space-y-6">
              <div>
                <h2 className="font-display text-xl mb-3">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  Galerie & Art Depot・Anne Moerchen<br />
                  Anne Moerchen<br />
                  Brahmsallee 24<br />
                  20144 Hamburg
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Kontakt</h3>
                <p className="text-muted-foreground">
                  Telefon: +49 (0)40 27 10 28<br />
                  E-Mail: galerie@galerie-anne-moerchen.de
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="text-muted-foreground">
                  Anne Moerchen<br />
                  Brahmsallee 24<br />
                  20144 Hamburg
                </p>
              </div>
              
              <div className="pt-6 border-t border-border">
                <h3 className="font-medium mb-3">Haftungsausschluss</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                  <p>
                    <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                  <p>
                    <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Impressum;