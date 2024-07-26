"use client";
import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import { techs } from "@/app/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
// import { useTranslation } from 'next-i18next';
import * as Dialog from "@radix-ui/react-alert-dialog";
import { ContactSection } from "../contact-section";
import { Header } from "@/app/components/header";
import { HighlightedProjects } from "../highlightedprojects";
import { KnownTechs } from "../known-techs";
import { IoCloseSharp } from "react-icons/io5";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/brendaAndersen",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://linkedin.com/in/brenda-andersen-de-lima",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/qr/SISWANKVLLXEL1",
    icon: <TbBrandWhatsapp />,
  },
];
export const CharSection = ({}) => {
  // const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "blur-sm" : ""}>
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
              <Dialog.Root>
                <Dialog.Trigger
                  asChild
                  className="rounded p-2 hover:bg-violet-250"
                >
                  <Button
                    onClick={() => setOpen(true)}
                    className="hover:px-6 hover:py-3.5 small:gap-0 sm:gap-0 hover:ease-out hover:duration-300 hover:font-bold w-max shadow-button"
                  >
                    Contate-me!
                    <FaLongArrowAltRight
                      className="lg:visible md:visible xs:invisible small:invisible sm:invisible"
                      size={18}
                    />
                  </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-gray-200" />
                  <Dialog.Content
                    className="fixed top-[50%] left-[50%] max-h-[85vh] 
                  translate-x-[-50%] translate-y-[-50%] focus:outline-none
                  rounded-md p-8 shadow-lg bg-background md:w-[400px] lg:w-[400px] h-[500px] 
                  border-gray-600 border small:w-[300px]"
                  >
                    <Dialog.Cancel onClick={() => setOpen(false)}>
                      <IoCloseSharp color="white" />
                    </Dialog.Cancel>
                    <Dialog.Description className="w-[400px] small:pb-2 font-bold text-2xl text-violet-250 p-6 small:p-0 sm:p-0">
                      Send me a message!
                    </Dialog.Description>
                    <ContactSection />
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
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
          <Image
            width={420}
            height={404}
            src="/images/gif.gif"
            alt="Profile Picture"
            className="lg:visible md:visible xs:invisible small:invisible sm:invisible sm:w-full small:pt-28 tablet:pt-0 lg:pt-0 xs:w-full w-[400px] h-[300px] tablet:w-full lg:w-[504px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </div>
      </section>

      <KnownTechs />
      <HighlightedProjects />
    </div>
  );
};
