export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    link: string;
  };
  location: {
    name: string;
    link: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}