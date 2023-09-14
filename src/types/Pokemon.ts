export type PokemonData = {
  name: string;
  sprites: PokemonSprites;
  stats: PokemonStats[];
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
