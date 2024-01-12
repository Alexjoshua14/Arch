import Hero from "@/components/Hero"
import Map from "@/components/Map"
import Image from "next/image"
import { FC } from "react"


const heroContent = {
  src: '/assets/contact/SIZE/image-hero.jpg',
  alt: '',
  header: 'Contact',
  title: 'Tell us about your project',
  description: `We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!`

}

interface ContactInfoProps {
  title: string
  mail: string
  address: string
  phone: string
  mapLink: string
}

const ContactInfo: FC<ContactInfoProps> = ({ title, mail, address, phone, mapLink }) => {
  return (
    <div className="flex-1 w-full flex justify-between flex-col xs:flex-row lg:flex-col gap-8 xs:gap-4 max-w-[600px]">
      <div className="flex flex-col gap-4 text-gray-700">
        <h3 className="font-bold">
          {title}
        </h3>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p>Mail:</p>
            <p>
              {mail}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Address:</p>
            <p>
              {address}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Phone:</p>
            <p>
              {phone}
            </p>
          </div>
        </div>
      </div>
      <div className="text-black flex gap-4 font-medium xs:self-end lg:self-auto">
        <p>
          {`View on Map`}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2">
            <path d="M15 1l9 9-9 9M0 10h24" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <main className="min-h-[60dvh] page-gutter-y">
      <Hero {...heroContent} />
      <div className="w-full page-gutter-x">
        <section className="w-full py-20 flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h2 className="heading-md">
              Contact Details
            </h2>
          </div>
          <ContactInfo title="Office I" mail="archone@mail.com" address="1892 Chenoweth Drive TN" phone="123-456-3451" mapLink="https://www.google.com/maps" />
          <ContactInfo title="Office II" mail="archtwo@mail.com" address="3399 Wines Lane TX" phone="987-654-7654" mapLink="https://www.google.com/maps" />
        </section>
      </div>
      <div className="w-full xs:page-gutter-x">
        <Map />
      </div>
    </main>
  )
}