import { PokemonData } from "../types/Pokemon";

export default function PokemonContainer({
  pokemon,
}: {
  pokemon: PokemonData;
}) {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
      <h1 className="text-3xl font-bold">
        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
      </h1>
    </div>
  );
}
