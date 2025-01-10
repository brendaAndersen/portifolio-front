"use client";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { useState } from "react";
import { ContactButton } from "../contact-section";
import { Header } from "@/app/components/header";
import { HighlightedProjects } from "../highlightedprojects";
import { KnownTechs } from "../known-techs";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";


import clsx from 'clsx';
import { techs } from "@/app/lib/utils";

export const MOCK_CONTACTS = [
  {
    url: "https://github.com/brendaAndersen",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://linkedin.com/in/brenda-andersen-de-lima",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/5551984981330?text=Ol%C3%A1,%20verifiquei%20seu%20portif%C3%B3lio!",
    icon: <TbBrandWhatsapp />,
  },
];

export const CharSection = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={clsx({ 'blur-sm' : open })}>
      <Header />
      <section className="w-full h-[650px] bg-char-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 py-32 lg:pb-[110px]">
        <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
          <div>
            <p className="font-mono text-violet-100 font-bold">Olá! Sou a</p>
            <h2 className="text-4xl mt-2 text-bold">Brenda Andersen de Lima</h2>
            <div className="text-gray-400 my-6 text-sm sm:text-base lg:w-[600px]">
              Sou uma desenvolvedora FullStack e acredito que linhas de código
              sempre podem mudar o mundo.
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              {techs.map((tech, index) => (
                <TechBadge key={index} name={tech.name} />
              ))}
            </div>
            <div className="flex items-center mt-6 lg:mt-4 sm:gap-5 sm:flex-row flex-col">
              <ContactButton className={"bg-violet-200 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-violet-250 transition-all disabled:opacity"} setOpen={setOpen} />
              <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                {MOCK_CONTACTS.map((contact, index) => (
                  <a
                    href={contact.url}
                    key={index}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <ProfilePicture />
        </div>
      </section>
      <KnownTechs />
      <HighlightedProjects />
    </div>
  );
};

const ProfilePicture = () => (
  <Image
    width={420}
    height={404}
    src="/images/gif.gif"
    alt="Profile Picture"
    className="lg:visible md:visible xs:invisible small:invisible sm:invisible sm:w-full small:pt-28 tablet:pt-0 lg:pt-0 xs:w-full w-[400px] h-[300px] lg:w-[504px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
  />
);
