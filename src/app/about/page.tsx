import Hero from "@/components/Hero";
import Image from "next/image";


const leaders = [
  {
    name: 'Jake Richards',
    position: 'Chief Architect',
    image: '/assets/about/desktop/avatar-jake.jpg'
  },
  {
    name: 'Thompson Smith',
    position: 'Head of Finance',
    image: '/assets/about/desktop/avatar-thompson.jpg'
  },
  {
    name: 'Jackson Rourke',
    position: 'Lead Designer',
    image: '/assets/about/desktop/avatar-jackson.jpg'
  },
  {
    name: 'Maria Simpson',
    position: 'Senior Architect',
    image: '/assets/about/desktop/avatar-maria.jpg'
  }
]

const heroContent = {
  src: '/assets/about/SIZE/image-hero.jpg',
  alt: '',
  header: 'About',
  title: 'Your team of professionals',
  description: `Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.`

}

export default function About() {

  return (
    <main className="flex items-center justify-center page-gutter-y">
      <div className="w-full h-full flex flex-col gap-28 items-center justify-center max-w-7xl">
        <Hero {...heroContent} />
        <section className="w-full flex gap-10 page-gutter-x">
          <div className="flex-1 flex flex-col gap-14">
            <h2 className="heading-md w-1/2">
              Our Heritage
            </h2>
            <div className="flex flex-col gap-4 text-gray-700">
              <p>
                {`Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.`}
              </p>
              <p>
                {`Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. Our small team of world-class professionals provides input on every project.`}
              </p>
              <p>
                {`Our small team of world-class professionals provides input on every project.`}
              </p>
            </div>
          </div>
          <div className="relative flex-1 min-h-full hidden lg:flex">
            <Image src={`/assets/about/desktop/image-heritage.jpg`} alt="" fill className="object-contain" />
          </div>
        </section>
        <section className="w-full flex flex-col xl:flex-row gap-14 page-gutter-x">
          <div className="flex-1 w-1/2 ">
            <h2 className="heading-md">The Leaders</h2>
          </div>
          <div className="w-full xl:w-2/3 flex flex-col items-center justify-center xs:grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-14">
            {leaders.map((leader, i) => (

              <div className="w-full max-w-80 flex flex-col gap-4" key={`leader-${leader.name}`}>
                <div className="relative aspect-square w-full h-auto">
                  <Image src={leader.image} alt="" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="heading-sm">
                    {leader.name}
                  </h4>
                  <p className="text-gray-900/75">
                    {leader.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}