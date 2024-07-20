'use client'
import { useForm, FormProvider, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/app/components/button'
import { IoMdSend } from "react-icons/io";

const createUserSchema = z.object({
    name: z.string().nonempty({
      message: 'Name is required',
    }).transform(name => {
      return name
        .trim()
        .split(' ')
        .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
    email: z.string().nonempty({
      message: 'E-mail is required',
    }).email({
      message: 'Invalid email format',
    }).toLowerCase(),
    password: z.string().nonempty({
      message: 'Password is required',
    }).min(6, {
      message: 'Password must be at least 6 characters',
    }),
    techs: z.array(z.object({
      title: z.string().nonempty({ message: 'Technology is required' })
    })).min(3, {
      message: 'At least 3 technologies must be informed'
    })
  })

export const ContactSection = ({}) => {
  async function createUser() {
    alert("Congrats!")
  }
    const createUserForm = useForm({
      resolver: zodResolver(createUserSchema),
    })
    const {
      handleSubmit,
      formState: { isSubmitting },
      watch,
      control,
    } = createUserForm;
    
    return (
    <main>
      <FormProvider {...createUserForm}>
        <form
          onSubmit={handleSubmit(createUser)}
          className="text-white flex flex-col gap-4 w-full max-w-xs items-center"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_name" id="text-sm floating_name" className="text-white block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 dark:focus:border-violet-250 focus:outline-none focus:ring-0 focus:border-violet-250 peer font-thin" placeholder=" " required />
            <label className="text-violet-250 font-bold peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-250 peer-focus:dark:text-violet-250 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-bold">Name</label>
          </div> 
        
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" id="floating_email" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
            border-0 border-b-2 appearance-none text-white 
            border-gray-600 dark:focus:border-violet-250 focus:outline-none 
            focus:ring-0 focus:border-violet-250 peer font-thin
            " placeholder=" " required />
            <label className="text-violet-250 font-bold 
            peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-250 peer-focus:dark:text-violet-250 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-bold">E-mail</label>
          </div>                  
          <div className="relative z-0 w-full mb-5 group">
            <textarea id="message" className="bg-transparent 
            focus:outline-none focus:ring focus:ring-violet-250 
            block p-2.5 w-full text-sm rounded-lg border-2 border-gray-600 dark:placeholder-gray-400 dark:text-white appearance-none" placeholder="Write your message to me here"></textarea>
          </div>                  

          <Button className="m-6 hover:px-6 hover:py-4 hover:ease-in-out hover:duration-300 w-[300px] shadow-button">
            Send a message
            <IoMdSend />
          </Button>
        </form>
      </FormProvider>
    </main>
    )
}