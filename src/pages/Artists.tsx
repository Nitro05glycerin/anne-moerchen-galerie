import Navigation from '../components/Navigation';
import { artists, groupArtistsByLetter } from '../data/artists';

const Artists = () => {
  const groupedArtists = groupArtistsByLetter();
  const letters = Object.keys(groupedArtists).sort();

  return (
    <>
      <Navigation />
      
      <main className="gallery-section">
        <div className="gallery-container">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl text-center mb-16">
              Artists
            </h1>
            
            <nav className="mb-12">
              <ul className="flex flex-wrap justify-center gap-3 text-sm">
                {letters.map(letter => (
                  <li key={letter}>
                    <a
                      href={`#letter-${letter.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary gallery-transition"
                    >
                      {letter}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-12">
              {letters.map(letter => (
                <section key={letter} id={`letter-${letter.toLowerCase()}`}>
                  <h2 className="font-display text-2xl mb-6 text-primary">
                    {letter}
                  </h2>
                  <ul className="space-y-3">
                    {groupedArtists[letter].map(artist => (
                      <li key={artist.slug} id={artist.slug}>
                        <span className="text-lg text-foreground hover:text-primary gallery-transition border-b border-transparent hover:border-primary inline-block">
                          {artist.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Artists;
