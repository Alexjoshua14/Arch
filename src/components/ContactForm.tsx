'use client'

import { FC, HTMLAttributes } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, InputProps } from './ui/input'
import Button from './Button'
import { cn } from '@/lib/utils'

interface ContactFormProps {

}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Can't be empty",
  }).max(50, {
    message: "Too long",
  }),
  email: z.string().min(2, {
    message: "Can't be empty",
  }).email(),
  message: z.string().min(10, {
    message: "Can't be empty",
  }).max(500, {
    message: "Too long",
  }),
})

interface FormInputProps extends InputProps {

}

const FormInput: FC<FormInputProps> = ({ className, ...props }) => {
  return (
    <Input className={cn("lg:pe-20 border-0 border-b-[1px] rounded-none border-b-foreground text-xl placeholder:text-gray-200", className)} {...props} />
  )
}

const ContactForm: FC<ContactFormProps> = ({ }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <section className="flex flex-col md:flex-row gap-14 lg:gap-20 section">
      <div className="flex-1 w-2/3 xs:w-full">
        <h2 className="heading-md">
          {`Connect with us`}
        </h2>
      </div>
      <div className="flex-2 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-2 flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <FormInput placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>

                  <FormControl>
                    <FormInput placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>

                  <FormControl>
                    <FormInput placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2" />
                </FormItem>
              )}
            />
            <Button type="submit" arrow className='absolute bottom-0 translate-y-full right-0' />
          </form>
        </Form>
      </div>
    </section>
  )
}

export default ContactForm