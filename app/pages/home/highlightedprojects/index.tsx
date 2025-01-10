import { SectionTitle } from "../section-title";
import { HorizontalDivider } from "../../../components/divider/horizontal";
import { ProjectCard } from "./project-card";
import { items } from "@/app/lib/utils";

export const HighlightedProjects = () => {
  const projects = Object.values(items);
  return (
    <section className={"container py-16"}>
      <SectionTitle subtitle="projects" title="Highted Projects" />
      <HorizontalDivider className="mb-16" />
      <ProjectCard projects={projects} />
    </section>
  );
};
