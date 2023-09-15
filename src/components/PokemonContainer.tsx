import { PokemonData, SpeciesData } from "../types/Pokemon";
import { AsyncImage } from "../utils/AsyncImage";
import PokemonDescription from "./PokemonDescription";
import PokemonStats from "./PokemonStats";
import PokemonBackground from "./icons/PokemonBackground";

export default function PokemonContainer({
  pokemon,
  species,
}: {
  pokemon: PokemonData;
  species: SpeciesData;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="w-full relative flex flex-col items-center justify-center gap-3">
        <div className="w-1/2 absolute top-0 -z-10 opacity-10 sm:w-fit">
          <PokemonBackground size={600} />
        </div>
        <AsyncImage
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
      </div>

      <h1 className="text-4xl font-light lg:text-5xl">
        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
      </h1>

      <PokemonStats pokemon={pokemon} />
      <PokemonDescription pokemon={pokemon} species={species} />
    </div>
  );
}
