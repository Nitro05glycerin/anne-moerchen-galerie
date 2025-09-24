import Navigation from '../components/Navigation';
import historyMilchstrasse from '../assets/history-milchstrasse.png';
import historyInterior from '../assets/history-interior.jpg';
import historyMilchstrasseOld from '../assets/history-milchstrasse-old.png';
import historyDorotheenstrasse from '../assets/history-dorotheenstrasse.png';

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
              {/* 1) Dorotheenstraße */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      2003–2004
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Dorotheenstraße 53, 22301 Hamburg
                  </h3>
                  
                  {/* Gallery Image */}
                  <div className="mb-4">
                    <div className="gallery-card overflow-hidden">
                      <img 
                        src={historyDorotheenstrasse} 
                        alt="Historic gallery exterior on Dorotheenstraße in Winterhude showing traditional storefront with gallery signage and exhibition poster"
                        className="w-full h-48 sm:h-auto object-cover sm:object-contain"
                      />
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed mb-4">
                    Die frühen Jahre der Galerie lagen in Winterhude. Ausstellungen aus den Jahren 2003–2004 sind für diese Adresse dokumentiert.
                  </p>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>taz.de</span>
                    <span>Hamburger Abendblatt</span>
                  </div>
                </div>
              </div>

              {/* 2) Milchstraße */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      ab 2009
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Milchstraße 6a, 20148 Hamburg
                  </h3>
                  
                  {/* Gallery Image */}
                  <div className="mb-4">
                    <div className="gallery-card overflow-hidden">
                      <img 
                        src={historyMilchstrasse} 
                        alt="Gallery exterior on Milchstraße showing modern storefront with large windows displaying artworks"
                        className="w-full h-48 sm:h-auto object-cover sm:object-contain"
                      />
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed mb-4">
                    Spätestens Ende der 2000er war die Galerie in Rotherbaum/Harvestehude an der Milchstraße aktiv; für 2009 sind dort Ausstellungen und Verzeichniseinträge nachweisbar.
                  </p>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>Yelp</span>
                    <span>ArtRabbit</span>
                    <span>Galerien in Hamburg</span>
                  </div>
                </div>
              </div>

              {/* 3) Abteistraße */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8 bg-accent/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Anschließend
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Abteistraße 30, 20144 Hamburg
                  </h3>
                  
                  {/* Gallery Image */}
                  <div className="mb-4">
                    <div className="gallery-card overflow-hidden">
                      <img 
                        src={historyInterior} 
                        alt="Gallery interior with contemporary artworks displayed on yellow walls"
                        className="w-full h-48 sm:h-auto object-cover sm:object-contain"
                      />
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed mb-4">
                    Anschließend erfolgte der Umzug in die Abteistraße nach Harvestehude. (Hinweis: In offiziellen Verzeichnissen taucht die Postleitzahl teils als 20149 auf.) Zeitungs- und Branchenhinweise führen diesen Standort als „neue Räumlichkeiten" mit regelmäßigen Öffnungszeiten.
                  </p>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>ganz-hamburg</span>
                  </div>
                </div>
              </div>

              {/* 4) Brahmsallee (aktuell) */}
              <div className="border-l-4 border-primary pl-8 ml-4">
                <div className="gallery-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Aktuell
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">
                    Brahmsallee 24, 20144 Hamburg
                  </h3>
                  <p className="text-base leading-relaxed mb-4">
                    Heute hat die Galerie ihren Sitz in der Brahmsallee (Harvestehude/Grindel). Diese Adresse wird in den aktuellen Profilen und Kontaktangaben als gültiger Standort geführt.
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