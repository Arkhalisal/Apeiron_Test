// this is the component that renders the list of planets

// system imports
import { useEffect, useState } from "react";

// local imports
import { useGetAllPlanets } from "@/hooks/useGetAllPlanets";
import Loading from "@/components/share/Loading";
import Error from "@/components/share/Error";
import PageSwitchBar from "@/components/planetsListComponents/PageSwitchBar";
import PlanetCard from "@/components/planetsListComponents/PlanetCard";

// types
import type { AllPlanetDataType } from "@/types";

type PlanetsProps = {
  data: AllPlanetDataType;
};

export default function PlanetsList() {
  const { loading, error, data } = useGetAllPlanets();

  // handle loading, error
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return <div>{data && <Planets data={data} />}</div>;
}

function Planets({ data }: PlanetsProps) {
  // handle pagination
  const pageSize = 25;
  const maxPage = Math.ceil(data.getPlanets.edges.length / pageSize);
  const [page, setPage] = useState(1);

  // handle the list of planets and initial load
  const [planetsList, setPlanetsList] = useState(data.getPlanets.edges.slice(0, pageSize) || []);

  // handle page change
  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setPlanetsList(data.getPlanets.edges.slice(start, end));
  }, [page, data]);

  // render the list of planets
  return (
    <div className="min-h-screen">
      <div className="text-3xl font-semibold text-white m-6">{data.getPlanets.pageInfo.totalCount} NFT Planets</div>

      <div className="flex flex-wrap justify-center">
        {planetsList.map((planet) => (
          <PlanetCard
            key={planet.node.planetID}
            planetId={planet.node.planetID}
            name={planet.node.name}
            image={planet.node.image}
            planetType={planet.node.planetType}
            price={planet.node.listingInfo?.startPrice}
            priceInUSD={planet.node.priceInUSD}
          />
        ))}
      </div>

      <div className="flex justify-center m-6">
        <PageSwitchBar page={page} maxPage={maxPage} setPage={setPage} />
      </div>
    </div>
  );
}
