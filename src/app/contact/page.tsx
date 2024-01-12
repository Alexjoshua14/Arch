import ContactForm from "@/components/ContactForm"
import Hero from "@/components/Hero"
import Map from "@/components/Map"
import { ContactInfo } from "@/components/ContactInfo"


const heroContent = {
  src: '/assets/contact/SIZE/image-hero.jpg',
  alt: '',
  header: 'Contact',
  title: 'Tell us about your project',
  description: `We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!`

}



export default function Contact() {
  return (
    <main className="min-h-[60dvh] page-gutter-y">
      <Hero {...heroContent} />
      <div className="w-full page-gutter-x">
        <section className="w-full flex flex-col lg:flex-row gap-10 section">
          <div className="flex-1">
            <h2 className="heading-md">
              Contact Details
            </h2>
          </div>
          <ContactInfo title="Office I" mail="archone@mail.com" address="1892 Chenoweth Drive TN" phone="123-456-3451" mapLink="https://www.google.com/maps" />
          <ContactInfo title="Office II" mail="archtwo@mail.com" address="3399 Wines Lane TX" phone="987-654-7654" mapLink="https://www.google.com/maps" />
        </section>
      </div>
      <div className="w-full xs:page-gutter-x section">
        <Map />
      </div>
      <div className="w-full page-gutter-x">
        <ContactForm />
      </div>
    </main>
  )
}