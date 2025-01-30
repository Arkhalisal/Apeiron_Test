import { useGetOnePlanet } from "@/hooks/useGetOnePlanet";
import { ChevronLeft } from "lucide-react";
import Router from "next/router";
import DetailPagePlanetCard from "./detailPageComponents/DetailPagePlanetCard";
import ElementChart from "./detailPageComponents/ElementChart";

type DetailPageProps = {
  planetId: string;
};

export default function DetailPage({ planetId }: DetailPageProps) {
  const { loading, error, data } = useGetOnePlanet(planetId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const elements = {
    fire: data.getPlanet.fire,
    water: data.getPlanet.water,
    earth: data.getPlanet.earth,
    air: data.getPlanet.air,
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Back button */}
      <div
        className="absolute top-4 left-4 flex items-center text-white hover:scale-110 transition-colors cursor-pointer"
        onClick={() => Router.push("/")}
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
        <span className="text-sm">Back</span>
      </div>

      {/* Planet ID and Name */}
      <div className="w-[300px]">
        <div className="text-gray-400 text-sm">#{planetId}</div>
        <div className="text-white text-lg font-medium bg-black pl-2">{data.getPlanet.name}</div>
      </div>

      <DetailPagePlanetCard image={data.getPlanet.image} planetType={data.getPlanet.planetType} />

      <div>
        <div className="text-white text-xl font-medium">Element's Value</div>
      </div>

      <ElementChart {...elements} />
    </div>
  );
}
