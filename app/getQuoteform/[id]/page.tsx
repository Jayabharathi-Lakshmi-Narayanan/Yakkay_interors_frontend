import { Suspense } from "react";
import QuoteForm from "@/components/Quoteform/Quoteform";
import { services } from "@/lib/data/services"; // Import your services here

export default async function GetQuotePage({
  params,
}: {
  params: { id: string };
}) {
  const projectId = params.id;

  return (
    <div className="min-h-screen p-8 pt-20 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Get a <span className="text-yellow-500">Quote</span>
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <QuoteForm projectId={projectId} />
      </Suspense>
    </div>
  );
}

export function generateStaticParams() {
  // Your existing numeric IDs
  const numericIds = ["1", "2", "3", "4", "5", "6"];

  // IDs from your services data
  const serviceIds = services.map((service) => service.id);

  // Combine both sets of IDs, removing duplicates
  const allIds = Array.from(new Set([...numericIds, ...serviceIds]));

  // Return as array of { id: string } objects
  return allIds.map((id) => ({ id }));
}
