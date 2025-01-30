import { useRouter } from "next/router";
import { useMemo } from "react";

import { Layout } from "@/pages/components/Layout";
import DetailPage from "@/pages/planet/[id]/detail/components/DetailPage";

export default function Detail() {
  const router = useRouter();

  const planetId: string = useMemo(() => {
    return router.query.id?.toString() ?? "";
  }, [router.query.id]);

  console.log(planetId);

  return (
    <Layout>
      <DetailPage planetId={planetId} />
    </Layout>
  );
}
