import { useState } from "react";
import axios, { AxiosError } from "axios";
import PokemonContainerEmpty from "./components/PokemonContainerEmpty";
import { PokemonData } from "./types/Pokemon";
import PokemonContainer from "./components/PokemonContainer";
import PokemonContainerLoading from "./components/PokemonContainerLoading";

function App() {
  const [searchBar, setSearchBar] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<undefined | PokemonData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPokemonData = async () => {
    // Throw error if search bar is empty
    if (searchBar.length == 0) {
      throw new Error("Search bar is empty");
    }

    // Trigger loading & fetch Data
    setIsLoading(true);
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${searchBar}`
    );

    setPokemonData(response.data);
    console.log(response.data);

    // Remove loading
    setIsLoading(false);
  };

  const handleDataFetch = async () => {
    try {
      await fetchPokemonData();
    } catch (e: unknown) {
      // Remove data
      setPokemonData(undefined);

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
      {/* Background or Banner */}
      <div className="w-full h-48 absolute top-0 bg-sky-400 -z-10"></div>

      {/* Searchbar */}
      <section className="w-full h-36 max-w-7xl flex items-center justify-center bg-green-400">
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
            className="px-4 py-2 rounded-full bg-red-500 text-white"
          >
            Search
          </button>
        </form>
      </section>

      {/* Pokemon Details */}
      <section className="w-full max-w-7xl flex items-center justify-center">
        {isLoading ? (
          <PokemonContainerLoading />
        ) : pokemonData == undefined ? (
          <PokemonContainerEmpty />
        ) : (
          <PokemonContainer pokemon={pokemonData} />
        )}
      </section>
    </main>
  );
}

export default App;
