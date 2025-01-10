"use client";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdSend } from "react-icons/io";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@/app/components/button";
import * as Dialog from "@radix-ui/react-alert-dialog";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { VisuallyHidden } from '@reach/visually-hidden';

const createMessageSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: "Name is required",
    })
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ");
    }),
  email: z
    .string()
    .nonempty({
      message: "E-mail is required",
    })
    .email({
      message: "Invalid email format",
    })
    .toLowerCase(),
  message: z.string().nonempty({
      message: "Invalid email format",
  }),
});

type CreateMessageData = z.infer<typeof createMessageSchema>;

export const ContactSection = () => {
  const createMessageForm = useForm<CreateMessageData>({
    resolver: zodResolver(createMessageSchema),
  });

  const { register, handleSubmit, reset } = useForm<CreateMessageData>();

  const onSubmit = ({ name, email, message }: CreateMessageData) => {
      const templateParams = {
        name: name,
        message: message,
        email: email
      }
      emailjs.send("service_wve5oan", "template_d7n87lj", templateParams, "nR8g6BCHRY_j_P_H8").then((response) => { 
        toast.success(name + ", your message has been received!",{ duration: 2000 });
        reset();
      }, (err) => {
        toast.error(name + ", unfortunately, there was an error, please, try again!",{ duration: 2000 });
      })
  };

  return (
    <main>
      <Toaster richColors position="top-right" />
      <FormProvider {...createMessageForm}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white flex flex-col gap-4 w-full max-w-xs items-center"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="name"
              {...register("name")}
              type="text"
              name="name"
              className="focus:bg-slate-900 text-white focus:text-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none
              border-gray-600 focus:border-violet-250 peer font-thin"
              placeholder=" "
              required
            />
            <label className="text-violet-250 font-bold peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-9 scale-75 top-3 
            -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-250 peer-focus:dark:text-violet-250 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 text-bold">
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("email")}
              name="email"
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent 
                border-0 border-b-2 appearance-none text-white 
                border-gray-600 dark:focus:border-violet-250 focus:outline-none 
                focus:ring-0 focus:border-violet-250 peer font-thin
              "
              placeholder=" "
              required
            />
            <label
              className="text-violet-250 font-bold 
              peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
              rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-250 peer-focus:dark:text-violet-250 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 text-bold"
            >
              E-mail
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              {...register("message")}
              id="message"
              className="bg-transparent 
                focus:outline-none focus:ring focus:ring-violet-250 
                block p-2.5 w-full text-sm rounded-lg border-2 border-gray-600 dark:placeholder-gray-400 dark:text-white appearance-none"
              placeholder="Write your message to me here"
            ></textarea>
          </div>
          <Button type="submit" 
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all 
            duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-slate-800 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-violet-250  group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <IoMdSend className="text-violet-250"/> 
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                 <IoMdSend className="text-white"/> 
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Send me a message</span>
              </Button>
        </form>
      </FormProvider>
    </main>
  );
};

export const ContactButton = ({ setOpen }: any) => {
  const [open, setOpenLocal] = useState(false); 

  return (

    <Dialog.Root open={open} onOpenChange={(open) => setOpenLocal(open)}> 
      <Dialog.Trigger asChild>
        <button
          className=
        "bg-violet-200 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-violet-250 transition-all disabled:opacity"
          onClick={() => setOpen(true)} 
        >
          <h1 className="font-bold">Contate-me!</h1>
          <FaLongArrowAltRight className="lg:visible md:visible xs:invisible small:invisible sm:invisible" size={18} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-200" />
        <Dialog.Content
          aria-labelledby="dialog-title" aria-describedby="dialog-description"
          className="fixed top-[50%] left-[50%] max-h-[85vh] translate-x-[-50%] translate-y-[-50%] focus:outline-none rounded-md p-8 shadow-lg bg-background md:w-[400px] lg:w-[400px] h-[500px] border-gray-600 border small:w-[300px]"
        >
          <VisuallyHidden>
            <Dialog.Title id="dialog-title">Formulário de Contato</Dialog.Title>
          </VisuallyHidden>
          <div id="dialog-description" className="flex place-content-end">
            <Dialog.Cancel onClick={() => {setOpenLocal(false); setOpen(false)}}>
              <IoCloseSharp color="white" />
            </Dialog.Cancel>
          </div>
          <ContactSection />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )  
};