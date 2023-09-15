import PokemonBackground from "./icons/PokemonBackground";
import PokemonLoading from "./icons/PokemonLoading";

export default function PokemonContainerLoading() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="w-full relative flex flex-col items-center justify-center gap-3">
        <div className="w-1/2 absolute top-0 -z-10 opacity-10 sm:w-fit">
          <PokemonBackground size={600} />
        </div>
      </div>

      <div className="min-w-[200px] min-h-[200px] w-1/4 flex items-center justify-center animate-spin lg:min-w-[246px] lg:min-h-[246px] xl:min-w-[320px] xl:min-h-[320px]">
        <PokemonLoading size={60} />
      </div>
      <span className="text-2xl lg:text-4xl">Searching...</span>
    </div>
  );
}
