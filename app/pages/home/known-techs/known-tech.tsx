import { ReactNode } from "react";

import { getRelativeTimeString } from "@/app/utils/get-relative-time";
type KnownTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "en"
  ).replace("since ", "");

  return (
    <div id="skills" className="p-6 rounded-lg flex flex-col gap-2  border border-violet-100 text-violet-100 hover:text-white hover:bg-violet-100 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-bold">{tech.name}</p>
        {tech.icon}
      </div>
      <span>{relativeTime}</span>
    </div>
  );
};
