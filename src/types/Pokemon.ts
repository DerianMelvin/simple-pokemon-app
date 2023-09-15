export type PokemonData = {
  name: string;
  sprites: PokemonSprites;
  stats: PokemonStats[];
  species: PokemonSpecies;
  types: PokemonTypes[];
};

type PokemonSprites = {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
};

type PokemonStats = {
  base_stat: number;
};

type PokemonSpecies = {
  url: string;
};

type PokemonTypes = {
  type: {
    name: string;
  };
};

export type SpeciesData = {
  flavor_text_entries: SpeciesFlavourTextEntries[];
  genera: SpeciesGenera[];
  habitat: {
    name: string;
  };
};

type SpeciesFlavourTextEntries = {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: string;
  };
};

type SpeciesGenera = {
  genus: string;
  language: {
    name: string;
  };
};
