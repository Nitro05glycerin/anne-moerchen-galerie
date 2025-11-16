import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { artists } from '../data/artists';
import heroImage from '/lovable-uploads/IMG_7960.jpg.png';
import interiorImageNew from '/lovable-uploads/IMG_0173.jpg.png';
import galleryOpening from '/lovable-uploads/6103267c-e81f-4392-a67c-276e64c16cb1.JPG.png';

const Home = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Galerie & Art Depot storefront in Hamburg-Harvestehude with colorful contemporary artworks displayed in windows"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="gallery-container">
            <div className="max-w-3xl text-white">
              <h1 className="font-display text-4xl lg:text-6xl mb-6">
                Galerie & Art Depot・Anne Moerchen
              </h1>
              <div className="space-y-4 mb-8">
                <p className="text-xl lg:text-2xl font-sans-light">
                  Internationale zeitgenössische Kunst in Hamburg–Harvestehude.
                </p>
                <p className="text-lg lg:text-xl text-white/90">
                  International contemporary art in Hamburg–Harvestehude.
                </p>
              </div>
              <Link to="/kontakt" className="gallery-button">
                Besuch planen / Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* International Contemporary Art Section */}
        <section className="gallery-section">
          <div className="gallery-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl text-center mb-12">
                International Contemporary Art
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-lg leading-relaxed">
                  Internationale renommierte und junge zeitgenössische Künstler. Schwerpunkt ist die Malerei mit expressiver, figurativer bis realistischer Kunst. Fotografie und Skulptur sind auch vertreten.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Auch hier zeigt die Galeristin einen Querschnitt ihres weit gefächerten Angebots an Bildern von internationalen Künstlern. Ein Mix aus figurativ bis abstrakt, wobei die expressive Farbigkeit der Werke einen sofort in den Bann zieht.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Es werden aber auch schwarz-weiß Werke des 2008 verstorbenen international bekannten Malers Sonderborg präsentiert.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Neu sind einige Frauen-Bilder der Hamburgerin Ragna v Negelein. Ebenfalls gibt es freche Pop-Up-Bilder des jungen Hamburger Malers Marvin Wagner, der sich mit der Sucht nach bekannten Modelabels auseinandersetzt.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Auch neue abstrakte Werke des Hamburger Malers Robert Hoffmann laden zum Betrachten ein!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Invitation */}
        <section className="gallery-section bg-secondary/30">
          <div className="gallery-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl lg:text-3xl mb-6">
                Entdecken Sie die Werke vor Ort
              </h2>
              <p className="text-lg mb-4">
                Wir präsentieren wechselnde Auswahl im Raum – ohne Online-Shop. Kommen Sie vorbei und entdecken Sie die Werke vor Ort.
              </p>
              <p className="text-base text-muted-foreground">
                <em>We curate selections in the space—no online shop. Visit us to experience the works in person.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="gallery-section">
          <div className="gallery-container">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl lg:text-3xl text-center mb-12">
                Öffnungszeiten / Opening Hours
              </h2>
              
              <div className="gallery-card p-8 text-center">
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-medium mb-1">Donnerstag & Freitag</p>
                    <p className="text-lg text-muted-foreground">13:30 – 18:00</p>
                  </div>
                  
                  <div>
                    <p className="text-xl font-medium mb-1">Samstag</p>
                    <p className="text-lg text-muted-foreground">12:00 – 15:00</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-base text-muted-foreground">
                      Und nach telefonischer Vereinbarung
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <em>And by telephone appointment</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impressions */}
        <section className="gallery-section">
          <div className="gallery-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl text-center mb-12">
                Impressions
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="gallery-card overflow-hidden">
                  <img
                    src={interiorImageNew}
                    alt="Gallery interior with colorful contemporary artworks and modern track lighting"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src={galleryOpening}
                    alt="Gallery opening event with visitors gathered outside the contemporary art space"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src="/lovable-uploads/impression-1.png"
                    alt="Contemporary art exhibition with vibrant surfboard painting in gallery window"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src="/lovable-uploads/impression-2.png"
                    alt="Gallery interior featuring contemporary abstract landscape painting"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src="/lovable-uploads/impression-3.png"
                    alt="Gallery opening event with visitors viewing contemporary art"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src="/lovable-uploads/impression-4.png"
                    alt="Visitors viewing pop art Coca-Cola painting at gallery exhibition"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src="/lovable-uploads/impression-5.png"
                    alt="Gallery exhibition featuring vibrant pop art paintings of crushed Coca-Cola cans"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="gallery-card overflow-hidden">
                  <img
                    src="/lovable-uploads/impression-6.png"
                    alt="Gallery office and exhibition space with colorful contemporary artworks"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artists List */}
        <section className="gallery-section bg-secondary/30">
          <div className="gallery-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl text-center mb-12">
                Artists
              </h2>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-3 text-center md:text-left">
                {artists.map(artist => (
                  <li key={artist.slug}>
                    <Link
                      to={`/artists#${artist.slug}`}
                      className="text-foreground hover:text-primary gallery-transition border-b border-transparent hover:border-primary inline-block"
                    >
                      {artist.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;