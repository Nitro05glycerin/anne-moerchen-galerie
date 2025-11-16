// Artists list - alphabetically sorted
// Each artist has a name and a slug for URL anchors

export interface Artist {
  name: string;
  slug: string;
}

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const artistNames = [
  'Elvira Bach',
  'Patricia Chodacki (Pancho Mama)',
  'Inga von Dingenskirchen',
  'Hans Due',
  'Shan Fan',
  'GRAFY',
  'Robert Hoffmann',
  'Hans Hushan',
  'Margot Jabbour',
  'Steven Lowy',
  'Royal Nebeker',
  'Ragna von Negelein',
  'Sviatoslav Novossadiouk',
  "Gavin O'Neill",
  'Antonio Del Prete',
  'Otto Quirin',
  'Radomir',
  'Eckart Roese',
  'Neal Slavin',
  'K.R.H. Sonderborg',
  'Helen Spoerri',
  'Stefan Szczesny',
  'Marvin Wagner',
];

// Extract last name for sorting
const getLastName = (name: string): string => {
  // Handle special cases
  if (name === 'GRAFY' || name === 'Radomir') {
    return name;
  }
  
  // Remove parenthetical content
  const cleanName = name.replace(/\s*\([^)]*\)/g, '');
  
  // Split by space and get last word
  const parts = cleanName.trim().split(/\s+/);
  return parts[parts.length - 1];
};

export const artists: Artist[] = artistNames
  .sort((a, b) => {
    const lastNameA = getLastName(a);
    const lastNameB = getLastName(b);
    return lastNameA.localeCompare(lastNameB);
  })
  .map(name => ({
    name,
    slug: slugify(name),
  }));

// Group artists by first letter
export const groupArtistsByLetter = (): Record<string, Artist[]> => {
  return artists.reduce((acc, artist) => {
    const firstLetter = artist.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(artist);
    return acc;
  }, {} as Record<string, Artist[]>);
};
