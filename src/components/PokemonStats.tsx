import { useState } from "react";
import { PokemonData } from "../types/Pokemon";
import ChevronDown from "./icons/ChevronDown";

const customStats = ["HP", "ATK", "DEF", "SPC. ATK", "SPC. DEF", "SPD"];

export default function PokemonStats({ pokemon }: { pokemon: PokemonData }) {
  const [viewStats, setViewStats] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div className="w-full rounded-lg border border-blue-200 bg-gradient-to-r from-blue-300 hover:bg-blue-300 transition-all ease-out duration-300">
        <button
          onClick={() => setViewStats((value) => !value)}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <span className="text-3xl font-light">Stats</span>
          <div
            className={`min-w-fit ${
              viewStats ? "rotate-180" : ""
            } transition-all ease-out duration-200`}
          >
            <ChevronDown size={40} />
          </div>
        </button>
      </div>

      {viewStats && (
        <div className="w-fit flex flex-wrap items-center justify-center py-2 bg-gradient-to-r from-transparent via-white to-transparent">
          {pokemon.stats.map((stat, i) => (
            <div
              key={i}
              className="w-[120px] flex flex-col items-center justify-center gap-1 p-3 border-t-2 border-gray-300"
            >
              <span className="text-xl font-light">{customStats[i]}</span>
              <span className="text-2xl">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
