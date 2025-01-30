import Image from "next/image";
import planetBorder from "@/public/image-assets/image-planet-normal.png";
import planetTypeToImages from "@/data/planetTypeToImage";

interface PlanetDetailProps {
  image: string;
  planetType: PlanetType;
}

type PlanetType = keyof typeof planetTypeToImages;

export default function DetailPagePlanetCard({ image, planetType }: PlanetDetailProps) {
  return (
    <div className="w-[400px] my-4 hover:scale-105 transition-all">
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
      </div>
    </div>
  );
}
