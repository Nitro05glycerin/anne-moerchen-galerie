import Navigation from '../components/Navigation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Kontakt = () => {
  return (
    <>
      <Navigation />
      
      <main className="gallery-section">
        <div className="gallery-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Kontakt / Contact
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="gallery-card p-8">
                  <h2 className="font-display text-2xl mb-6">Kontaktinformationen</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Inhaberin</h3>
                      <p className="text-lg">Anne Moerchen</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Brahmsallee 24<br />
                          20144 Hamburg (Harvestehude)<br />
                          Deutschland
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Telefon</h3>
                        <a 
                          href="tel:+4940271028" 
                          className="text-muted-foreground gallery-transition hover:text-primary"
                        >
                          +49 (0)40 27 10 28
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">E-Mail</h3>
                        <a 
                          href="mailto:galerie@galerie-anne-moerchen.de" 
                          className="text-muted-foreground gallery-transition hover:text-primary"
                        >
                          galerie@galerie-anne-moerchen.de
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="space-y-8">
                <div className="gallery-card p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl">Öffnungszeiten</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Donnerstag</span>
                      <span className="text-muted-foreground">13:30 – 18:00</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Freitag</span>
                      <span className="text-muted-foreground">13:30 – 18:00</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="font-medium">Samstag</span>
                      <span className="text-muted-foreground">12:00 – 15:00</span>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        Und nach telefonischer Vereinbarung
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <em>And by telephone appointment</em>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visit Note */}
                <div className="gallery-card p-6 bg-accent/20">
                  <h3 className="font-medium mb-3">Ihr Besuch</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir freuen uns auf Ihren Besuch in unserer Galerie. 
                    Für Beratungen oder spezielle Terminwünsche rufen Sie uns gerne an.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <em>We look forward to your visit. Please call for consultations or special appointments.</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Location Note */}
            <div className="mt-16 text-center">
              <div className="gallery-card p-8 bg-secondary/30">
                <h3 className="font-display text-xl mb-4">Hamburg-Harvestehude</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Unsere Galerie befindet sich im eleganten Stadtteil Harvestehude, 
                  nur wenige Minuten von der Außenalster entfernt. 
                  Die Brahmsallee ist gut mit öffentlichen Verkehrsmitteln erreichbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Kontakt;