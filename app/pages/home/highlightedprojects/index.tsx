import { SectionTitle } from "../section-title";
import { HorizontalDivider } from "../../../components/divider/horizontal";
import { ProjectCard } from "./project-card";

const items = [
  {
    name: "Physics",
    link: "https://github.com/brendaAndersen/physics",
    description:
      "Aplicação pessoal em desenvolvimento acerca de conhecimentos em física.",
    techs: ["React/TS", "Git/Github", "Java/SpringBoot"],
  },
  {
    name: "NTT Movie",
    link: "https://github.com/brendaAndersen/ntt-movie",
    description: "Projeto consome uma API e lista os filmes vindos dela.",
    techs: ["Angular", "JS/TS", "Git/Github"],
  },
  {
    name: "Projeto One Piece",
    link: "https://github.com/brendaAndersen/one-piece-project",
    description: "Projeto frontend com a temática de One Piece.",
    techs: ["JS/TS", "Git/Github", "CSS"],
  },
  {
    name: "To Do List",
    link: "https://github.com/brendaAndersen/to-do",
    description:
      "Aplicação visa a implementação do CRUD (criação, atualização e deleção de tarefas)",
    techs: ["Angular", "JS/TS", "Git/Github"],
  },
];
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
