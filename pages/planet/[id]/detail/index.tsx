// this is the detail page

// system imports
import { useRouter } from "next/router";
import { useMemo } from "react";

// local imports
import Layout from "@/pages/components/Layout";
import DetailPage from "@/pages/planet/[id]/detail/components/DetailPage";

export default function Detail() {
  const router = useRouter();

  // get planet id from url params
  const planetId: string = useMemo(() => {
    return router.query.id?.toString() ?? "";
  }, [router.query.id]);

  return (
    <Layout>
      <DetailPage planetId={planetId} />
    </Layout>
  );
}
