import { useState } from "react";
import ChevronDown from "./icons/ChevronDown";
import { PokemonData, SpeciesData } from "../types/Pokemon";

export default function PokemonDescription({
  pokemon,
  species,
}: {
  pokemon: PokemonData;
  species: SpeciesData;
}) {
  const [viewDescription, setViewDescription] = useState<boolean>(false);

  // Filter arrays by language
  const filterFlavorText = species.flavor_text_entries.filter(
    (text) => text.language.name == "en"
  );
  const filterGenus = species.genera.filter(
    (data) => data.language.name == "en"
  );

  // Get flavour texts
  const inGameVersion1 =
    filterFlavorText[filterFlavorText.length - 1].version.name;
  const inGameDesc1 = filterFlavorText[filterFlavorText.length - 1].flavor_text;
  const inGameVersion2 =
    filterFlavorText[filterFlavorText.length - 3].version.name;
  const inGameDesc2 = filterFlavorText[filterFlavorText.length - 3].flavor_text;

  // Get pokemon genus
  const pokemonGenus = filterGenus[0].genus;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div className="w-full rounded-lg border border-red-200 bg-gradient-to-r from-red-300">
        <button
          onClick={() => setViewDescription((value) => !value)}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <span className="text-3xl font-light">Description</span>
          <div className={`min-w-fit ${viewDescription ? "rotate-180" : ""}`}>
            <ChevronDown size={40} />
          </div>
        </button>
      </div>

      {viewDescription && (
        <div className="w-full flex flex-col flex-wrap items-center justify-between gap-4 py-2 bg-gradient-to-r from-transparent via-white to-transparent md:flex-row md:gap-0">
          <div className="w-full flex flex-col gap-5 px-4 md:w-1/2 md:border-r-2 md:border-gray-400">
            <div className="flex flex-col gap-2">
              <span className="text-lg italic text-gray-400">
                {`In-Game Desc. (${inGameVersion1})`}
              </span>
              <p className="text-lg font-light">{`${inGameDesc1}`}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg italic text-gray-400">
                {`In-Game Desc. (${inGameVersion2})`}
              </span>
              <p className="text-lg font-light">{`${inGameDesc2}`}</p>
            </div>
          </div>

          <div className="w-full h-[2px] bg-gray-400 md:hidden"></div>

          <div className="w-full flex flex-wrap gap-10 px-5 md:w-1/2">
            <div className="w-fit flex flex-col gap-3">
              <span className="text-2xl font-light">Genus:</span>
              <span className="px-3 py-2 rounded-md text-white capitalize bg-slate-900">
                {`${pokemonGenus}`}
              </span>
            </div>
            <div className="w-fit flex flex-col gap-3">
              <span className="text-2xl font-light">Types:</span>
              <ul className="flex flex-wrap gap-3 uppercase">
                {pokemon.types.map((data, i) => (
                  <li
                    key={i}
                    className="px-3 py-2 rounded-md text-white bg-slate-900"
                  >
                    {data.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-fit flex flex-col gap-3">
              <span className="text-2xl font-light">Habitat:</span>
              <span className="px-3 py-2 rounded-md text-white uppercase bg-slate-900">
                {`${species.habitat == null ? "???" : species.habitat.name}`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
