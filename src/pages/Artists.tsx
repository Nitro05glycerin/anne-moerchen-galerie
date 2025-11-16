import Navigation from '../components/Navigation';
import { artists } from '../data/artists';

const Artists = () => {
  return (
    <>
      <Navigation />
      
      <main className="gallery-section">
        <div className="gallery-container">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl text-center mb-8">
              Artists
            </h1>
            
            <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              ständig wechselnde Hängungen mit Werken der Galeriekünstler und einzelne Arbeiten neuer Künstler.
            </p>

            <ul className="space-y-3 max-w-2xl mx-auto">
              {artists.map(artist => (
                <li key={artist.slug} id={artist.slug}>
                  <span className="text-lg text-foreground hover:text-primary gallery-transition border-b border-transparent hover:border-primary inline-block">
                    {artist.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Artists;
