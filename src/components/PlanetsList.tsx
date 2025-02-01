// this is the component that renders the list of planets

// system imports
import { useEffect, useState } from "react";

// local imports
import { useGetAllPlanets } from "@/hooks/useGetAllPlanets";
import PageSwitchBar from "./planetsListComponents/PageSwitchBar";
import PlanetCard from "./planetsListComponents/PlanetCard";

export default function PlanetsList() {
  // fetch all planets using the custom hook
  const { loading, error, data } = useGetAllPlanets();

  // handle pagination
  const pageSize = 25;
  const maxPage = Math.ceil(data?.getPlanets.edges.length / pageSize);
  const [page, setPage] = useState(1);

  // handle the list of planets and initial load
  const [planetsList, setPlanetsList] = useState(data?.getPlanets.edges.slice(0, pageSize) || []);

  // handle page change
  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setPlanetsList(data?.getPlanets.edges.slice(start, end));
  }, [page, data]);

  // handle loading, error
  if (loading) return <p className="text-center text-xl font-semibold mt-8 text-white">Loading...</p>;
  if (error) return <p className="text-center text-xl font-semibold mt-8 text-red-600">Error: {error.message}</p>;

  // render the list of planets
  return (
    <div className="min-h-screen">
      <div className="text-3xl font-semibold text-white m-6">{data.getPlanets.pageInfo.totalCount} NFT Planets</div>

      <div className="flex flex-wrap justify-center">
        {planetsList?.map((planet: any) => (
          <PlanetCard
            key={planet.node.planetID}
            planetId={planet.node.planetID}
            name={planet.node.name}
            image={planet.node.image}
            planetType={planet.node.planetType}
            price={planet.node?.listingInfo?.startPrice}
            priceInUSD={planet.node?.priceInUSD}
          />
        ))}
      </div>

      <div className="flex justify-center m-6">
        <PageSwitchBar page={page} maxPage={maxPage} setPage={setPage} />
      </div>
    </div>
  );
}
