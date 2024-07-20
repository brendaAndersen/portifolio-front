import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

// const items = {
//   1: {"name":"NTT Movie","description": "Projeto consome uma API e lista os filmes vindos dela.", "techs":["Angular", "JS/TS", "Git/Github"]},
//   2: {"name":"Projeto One Piece", "description": "Projeto frontend com a temática de One Piece.", "techs":["JS/TS", "Git/Github", "CSS"]},
//   3: {"name":"To Do List", "description":"Aplicação visa a implementação do CRUD (criação, atualização e deleção de tarefas.)", "techs":["Angular", "JS/TS", "Git/Github"]},
// };
type ProjectCardProps = {
  projects: {
    name: string;
    link: string;
    description: string;
    techs: string[];
  }[]
}
export const ProjectCard = ({ projects }: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-[350px] h-500">
        <Image
          id="projects"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
          src="/images/p2.png"
          width={420}
          height={304}
          alt="Project Thumbnail"
        />
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <a href={project.link}>
              <h3 className="hover:underline flex items-center gap-3 font-bold text-lg text-violet-250">
                {project.name}
              </h3>
            </a>
            <p className="font-medium text-white my-6 text-justify lg:w-[700px]">
              {project.description}
            </p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
              {project.techs.map((tech, techIndex) => (
                <TechBadge name={tech} key={techIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
