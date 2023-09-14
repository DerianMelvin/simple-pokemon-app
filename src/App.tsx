import { useState } from "react";

function App() {
  const [searchBar, setSearchBar] = useState<string>("");

  const fetchPokemonData = () => {
    console.log(searchBar);
  };

  return (
    <main className="w-full p-5 flex flex-col items-center justify-center">
      <div className="w-full h-48 absolute bg-sky-400 -z-10"></div>
      <div className="w-full h-36 max-w-7xl flex items-center justify-center bg-green-400">
        {/* Searchbar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchPokemonData();
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

        {/* Pokemon Sprite */}
        {/* Pokemon Name */}

        {/* Pokemon description */}
      </div>
    </main>
  );
}

export default App;
