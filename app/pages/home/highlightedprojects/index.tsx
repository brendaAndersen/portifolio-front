import { SectionTitle } from "./../section-title";
import { HorizontalDivider } from "../../../components/divider/horizontal";
import { ProjectCard } from "../../../pages/home/highlightedprojects/project-card/";

// const items = {
//   1: {"name":"NTT Movie", "link":"https://github.com/brendaAndersen/ntt-movie", "description": "Projeto consome uma API e lista os filmes vindos dela.", "techs":["Angular", "JS/TS", "Git/Github"]},
//   2: {"name":"Projeto One Piece", "link":"https://github.com/brendaAndersen/one-piece-project", "description": "Projeto frontend com a temática de One Piece.", "techs":["JS/TS", "Git/Github", "CSS"]},
//   3: {"name":"To Do List", "link":"https://github.com/brendaAndersen/to-do", "description":"Aplicação visa a implementação do CRUD (criação, atualização e deleção de tarefas)", "techs":["Angular", "JS/TS", "Git/Github"]},
// }

const items = [ 
  {"name":"NTT Movie", "link":"https://github.com/brendaAndersen/ntt-movie", "description": "Projeto consome uma API e lista os filmes vindos dela.", "techs":["Angular", "JS/TS", "Git/Github"]},
  {"name":"Projeto One Piece", "link":"https://github.com/brendaAndersen/one-piece-project", "description": "Projeto frontend com a temática de One Piece.", "techs":["JS/TS", "Git/Github", "CSS"]},
  {"name":"To Do List", "link":"https://github.com/brendaAndersen/to-do", "description":"Aplicação visa a implementação do CRUD (criação, atualização e deleção de tarefas)", "techs":["Angular", "JS/TS", "Git/Github"]},
]
export const HighlightedProjects = ({}) => {
  const projects = Object.values(items);
  return (
    <section className={"container py-16"}>
      <SectionTitle subtitle="skills" title="Highted Projects" />
      <HorizontalDivider className="mb-16" />
      <ProjectCard projects={projects} />
    </section>
  );
};
