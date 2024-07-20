import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const techs = [{name:"Next.js", startDate:"2022-01-01"}, {name:"React", startDate:"2020-01-01"}, {name:"JS/TS", startDate:"2020-01-01"}, {name:"Node", startDate:"2022-01-01"}, {name:"PHP", startDate:"2019-03-01"}, {name:"Docker", startDate:"2022-01-01"}, {name: "Git/Github", startDate:"2019-01-01"}, {name:"Linux", startDate:"2019-01-01"}, {name:"Tailwind", startDate:"2020-01-01"}, {name:"CSS", startDate:"2019-01-01"}]
