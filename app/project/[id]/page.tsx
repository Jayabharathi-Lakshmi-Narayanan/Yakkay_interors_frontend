import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import ClientProjectPage from "./ClientProjectPage";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) return notFound();

  return <ClientProjectPage project={project} />;
}
