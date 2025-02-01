// this is the component that renders the detail page

// system imports
import { ChevronLeft } from "lucide-react";
import Router from "next/router";

// local imports
import { useGetOnePlanet } from "@/hooks/useGetOnePlanet";
import DetailPagePlanetCard from "./detailPageComponents/DetailPagePlanetCard";
import ElementChart from "./detailPageComponents/ElementChart";

// types
type DetailPageProps = {
  planetId: string;
};

export default function DetailPage({ planetId }: DetailPageProps) {
  // fetch planet data
  const { loading, error, data } = useGetOnePlanet(planetId);

  // if loading or error, return message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // get elements from data
  const elements = {
    fire: data.getPlanet.fire,
    water: data.getPlanet.water,
    earth: data.getPlanet.earth,
    air: data.getPlanet.air,
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* back button */}
      <div
        className="absolute top-4 left-4 flex items-center text-white hover:scale-110 transition-colors cursor-pointer"
        onClick={() => Router.push("/")}
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
        <span className="text-sm">Back</span>
      </div>

      {/* planet id and name */}
      <div className="w-[300px] mt-[43px] sm:mt-0">
        <div className="text-gray-400 text-sm">#{planetId}</div>
        <div className="text-white text-lg font-medium bg-black pl-2">{data.getPlanet.name}</div>
      </div>

      {/* planet card */}
      <DetailPagePlanetCard image={data.getPlanet.image} planetType={data.getPlanet.planetType} />

      <div>
        <div className="text-white text-xl font-medium">Element's Value</div>
      </div>

      {/* element chart */}
      <ElementChart {...elements} />
    </div>
  );
}
