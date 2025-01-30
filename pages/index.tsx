// this is the home page

// system imports

// local imports
import { Layout } from "./components/Layout";
import PlanetsList from "@/pages/components/PlanetsList";

export default function Home() {
  return (
    <Layout>
      <PlanetsList />
    </Layout>
  );
}
