import Navigation from '../components/Navigation';

const Geschichte = () => {
  return (
    <>
      <Navigation />
      
      <main className="gallery-section">
        <div className="gallery-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Geschichte / History
            </h1>
            
            {/* Lead Text */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg lg:text-xl leading-relaxed mb-4">
                Seit über zwei Jahrzehnten präsentiert die Galerie & Art Depot internationale zeitgenössische Kunst an verschiedenen Standorten in Hamburg.
              </p>
              <p className="text-base text-muted-foreground">
                <em>For over two decades, Galerie & Art Depot has presented international contemporary art at various locations throughout Hamburg.</em>
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-16">
              {/* 2001 */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Seit 2001
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Dorotheenstraße 53, 22301 Hamburg (Winterhude)
                  </h3>
                  <p className="text-base leading-relaxed mb-4">
                    Frühe Ausstellungsjahre mit regelmäßigen Öffnungszeiten Mi–Fr 16–19 Uhr, Sa 12–15 Uhr.
                  </p>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>taz.de</span>
                    <span>Hamburger Abendblatt</span>
                  </div>
                </div>
              </div>

              {/* 2008-2016 */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      2008–2016
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Milchstraße 6a, 20148 Hamburg (Rotherbaum/Harvestehude)
                  </h3>
                  <p className="text-base leading-relaxed mb-4">
                    Programm zeitgenössischer Kunst; Öffnungszeiten meist Di–Fr 13:30–18:30, Sa 12–15.
                  </p>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>Yelp</span>
                    <span>ArtRabbit</span>
                    <span>Galerien in Hamburg</span>
                  </div>
                </div>
              </div>

              {/* Seit 2021 */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8 bg-accent/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Seit 2021
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Brahmsallee 24, 20144 Hamburg (Harvestehude)
                  </h3>
                  <p className="text-base leading-relaxed mb-4">
                    Heutiger Standort „Galerie & Art Depot"; regelmäßige Öffnungszeiten Do–Fr 13:30–18:00, Sa 12:00–15:00.
                  </p>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>Instagram</span>
                    <span>Galerien in Hamburg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* English Summary */}
            <div className="mt-16 p-8 bg-secondary/30 gallery-card">
              <h4 className="font-display text-lg mb-4">English Summary</h4>
              <p className="text-base leading-relaxed text-muted-foreground">
                The gallery has evolved through three distinct locations in Hamburg since 2001, beginning in Winterhude, 
                then establishing itself in the Rotherbaum/Harvestehude area from 2008-2016, and finally settling at its 
                current location on Brahmsallee in Harvestehude since 2021, where it continues to present international 
                contemporary art with a focus on painting, photography, and sculpture.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Geschichte;