import { TbBrandNextjs } from "react-icons/tb";
import { SectionTitle } from "./../section-title";
import { KnownTech } from "./known-tech";
import { techs } from "@/app/lib/utils";

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title={"Knowledges"} subtitle={"skills"} />
      <div className="cursor-pointer w-full grid sm:grid-cols-2 sm:p-2 small:p-2 small:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs.map((tech, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: tech.name,
              startDate: tech.startDate,
            }}
          />
        ))}
      </div>
    </section>
  );
};
