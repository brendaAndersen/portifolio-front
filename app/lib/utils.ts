import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const techs = [
  {name:"Next.js", startDate:"2022-01-01"}, 
  {name:"React", startDate:"2021-01-01"}, 
  {name:"SpringBoot", startDate:"2024-01-01"}, 
  {name:"JS/TS", startDate:"2021-01-01"}, 
  {name:"Node", startDate:"2021-01-01"}, 
  {name:"Express.js", startDate:"2022-01-01"}, 
  {name:"PHP", startDate:"2021-06-01"}, 
  {name:"Docker", startDate:"2021-01-01"}, 
  {name: "Git/Github", startDate:"2019-01-01"}, 
  {name:"Linux", startDate:"2021-01-01"}, 
  {name:"Tailwind", startDate:"2021-01-01"}, 
  {name:"CSS", startDate:"2021-01-01"}
]
export const NAV_ITEMS = [
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
];

export const items = [
  {
    name: "Physics",
    link: "https://github.com/brendaAndersen/physics",
    description:
      "Aplicação pessoal em desenvolvimento acerca de conhecimentos em física.",
    techs: ["React/TS", "Git/Github", "Java/SpringBoot"],
  },
  {
    name: "Vue To Do List",
    link: "https://github.com/brendaAndersen/to-do-vue",
    description:
      "Aplicação visa a implementação do CRUD (criação, atualização e deleção de tarefas).",
    techs: ["Vue.js", "JS/TS", "Git/Github"],
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
];
