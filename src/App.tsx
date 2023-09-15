import { useState } from "react";
import axios, { AxiosError } from "axios";
import PokemonContainerEmpty from "./components/PokemonContainerEmpty";
import { PokemonData, SpeciesData } from "./types/Pokemon";
import PokemonContainer from "./components/PokemonContainer";
import PokemonContainerLoading from "./components/PokemonContainerLoading";
import PokemonLogo from "./components/icons/PokemonLogo";
import PokemonLoading from "./components/icons/PokemonLoading";

function App() {
  const [searchBar, setSearchBar] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<undefined | PokemonData>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [speciesData, setSpeciesData] = useState<any | SpeciesData>();

  const fetchData = async () => {
    // Throw error if search bar is empty
    if (searchBar.length == 0) {
      throw new Error("Search bar is empty");
    }

    // Trigger loading & fetch pokemon data
    setIsLoading(true);
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${searchBar}`
    );

    setPokemonData(pokemon.data);

    // Fetch species data using url from pokemon data
    const species = await axios.get(pokemon.data.species.url);

    setSpeciesData(species.data);

    // Remove loading
    setIsLoading(false);
  };

  const handleDataFetch = async () => {
    try {
      await fetchData();
    } catch (e: unknown) {
      // Remove data
      setPokemonData(undefined);
      setSpeciesData(undefined);

      // Remove loading
      setIsLoading(false);

      if (e instanceof AxiosError) {
        console.log(e.response);
        return;
      }

      if (e instanceof Error) {
        console.log(e.message);
        return;
      }
    }
  };

  return (
    <main className="w-full p-5 flex flex-col items-center justify-center gap-16 overflow-x-clip">
      <div className="w-full h-48 absolute flex justify-between top-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-green-400 to-sky-400"></div>
        <div className="w-5/6 flex items-end justify-end bg-gradient-to-r from-sky-400 sm:w-3/6 md:w-2/6 lg:w-1/6 xl:w-[14%]">
          <div></div>
          <img
            src="/banner.jpg"
            alt="pokemon banner"
            className="absolute h-48 object-cover -z-20"
          />
        </div>
      </div>

      <section className="w-full h-36 max-w-7xl flex flex-col items-center justify-center gap-4">
        <PokemonLogo size={170} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDataFetch();
          }}
          className="w-full flex flex-col items-center justify-center gap-2 sm:flex-row"
        >
          <div className="w-1/2 min-w-fit">
            <label htmlFor="searchbar" className="sr-only">
              Search Pokemon
            </label>
            <input
              type="text"
              name="searchbar"
              placeholder="Search for..."
              className="w-full px-5 py-2 rounded-full bg-slate-50"
              onChange={(e) => {
                setSearchBar(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="px-1 py-1 rounded-full bg-red-500 rotate-45"
          >
            <PokemonLoading size={35} />
          </button>
        </form>
      </section>

      <section className="w-full max-w-7xl flex items-center justify-center">
        {isLoading ? (
          <PokemonContainerLoading />
        ) : pokemonData == undefined ? (
          <PokemonContainerEmpty />
        ) : (
          <PokemonContainer pokemon={pokemonData} species={speciesData} />
        )}
      </section>
    </main>
  );
}

export default App;
