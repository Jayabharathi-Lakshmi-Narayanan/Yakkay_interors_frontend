// app/project/[id]/page.tsx
import { notFound } from "next/navigation";
import ClientProjectPage from "./ClientProjectPage";
import { projectsData } from "@/lib/data/projectdes";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === Number(params.id));
  return {
    title: project?.title || "Project",
    description:
      project?.keyFeatures?.map((f) => f.description).join(", ") ||
      "Interior project details",
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ClientProjectPage project={project} />;
}
