// this is the detail page

// system imports
import { useRouter } from "next/router";

// local imports
import Layout from "@/components/Layout";
import DetailPage from "@/components/DetailPage";

// types
type RouterQuery = {
  id: string;
};

export default function Detail() {
  const router = useRouter();

  // get planet id from url params
  const { id } = router.query as RouterQuery;

  return (
    <Layout>
      <DetailPage planetId={id} />
    </Layout>
  );
}
