import type { ApolloError } from "@apollo/client";

export default function Error({ error }: { error: ApolloError }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-4xl font-semibold mt-8 text-red-600">Error: {error.message}</div>;
    </div>
  );
}
