import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import ClientServicePage from "./ClientServicePage";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);
  if (!service) return notFound();
  return <ClientServicePage service={service} />;
}
