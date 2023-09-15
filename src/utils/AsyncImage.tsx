import { useState, useEffect } from "react";
import PokemonLoading from "../components/icons/PokemonLoading";

export const AsyncImage = (props: { src: string }) => {
  const [loadedSrc, setLoadedSrc] = useState<null | string>(null);

  useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);

  if (loadedSrc === props.src) {
    return <img {...props} className="min-w-[200px] w-1/4" />;
  }

  return (
    <div className="min-w-[200px] min-h-[200px] w-1/4 flex items-center justify-center animate-spin lg:min-w-[246px] lg:min-h-[246px] xl:min-w-[320px] xl:min-h-[320px]">
      <PokemonLoading size={60} />
    </div>
  );
};
