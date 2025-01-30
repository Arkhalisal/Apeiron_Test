import Router from "next/router";

import Image from "next/image";
import planetBorder from "@/public/image-assets/image-planet-normal.png";
import planetTypeToImages from "@/data/planetTypeToImage";

type PlanetType = keyof typeof planetTypeToImages;

type PlanetCardProps = {
  planetId: string;
  name?: string;
  image: string;
  planetType: PlanetType;
  price?: number | null;
  priceInUSD?: number | null;
};

export default function PlanetCard({ planetId, name, image, planetType, price, priceInUSD }: PlanetCardProps) {
  const handlePlanetClick = () => {
    Router.push(`/planet/${planetId}/detail`);
  };

  return (
    <div className="w-[400px] my-4 cursor-pointer hover:scale-105 transition-all" onClick={handlePlanetClick}>
      <div className="relative flex items-center justify-center">
        {/* Border Frame */}
        <div className="relative">
          <Image src={planetBorder} alt="Planet Border" className="h-auto w-[320px]" priority />
          <div className="absolute -top-1 -left-1">
            <Image src={planetTypeToImages[planetType]} alt="Planet Type" className="h-[60px] w-auto" priority />
          </div>
        </div>

        {/* Planet Image */}
        <div className="absolute top-1/2 -translate-y-1/2">
          <Image src={image} alt="Planet" className="w-auto h-auto" width={400} height={400} priority />
        </div>

        {/* Planet Name */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-center">
          <div className="text-sm font-medium text-gray-400"># {planetId}</div>
          <div className="text-md font-semibold text-white">{name}</div>
        </div>

        {/* Dark overlay at the bottom */}
        <div className="absolute w-[304px] h-16 bottom-3 left-1/2 -translate-x-1/2 bg-black opacity-50" />

        {/* Price tag */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center z-20">
          <div className="flex items-center">
            <span className="text-gray-400 text-xl">Ξ</span>
            <span className="text-white text-xl ml-2">{price || "not listing"}</span>
            <span className="text-gray-400 text-lg ml-3">~$ {priceInUSD?.toFixed() || "not listing"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
