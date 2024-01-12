'use client'

import { useScreenSize } from "@/lib/hooks/useScreenSize";
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

export default function About() {
  const { screenSize } = useScreenSize()

  return (
    <main className="flex items-center justify-center page-gutter-y">
      <div className="w-full h-full flex flex-col gap-28 items-center justify-center max-w-7xl">
        <div className="w-full h-full xs:page-gutter-x">
          <section className="relative w-full h-fit flex flex-col ">
            <div className="relative w-full aspect-[375/240] xs:aspect-[573/635] sm:aspect-auto lg:w-[635px] sm:h-[720px]" >
              <Image
                src={`/assets/about/${screenSize}/image-hero.jpg`}
                alt=""
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            <div className="relative xs:absolute xs:bottom-0 xs:right-0 w-fit h-fit mr-8 -mt-10 xs:mt-0 xs:mr-0 pr-10 xs:pr-0 pl-10 lg:pl-44 pt-12 xs:pt-10 sm:pt-44 bg-white">
              <div className="hidden sm:flex absolute top-0 -translate-y-1/2 right-0">
                <h1 className="heading-xl">About</h1>
              </div>
              <div className="max-w-[446px] flex flex-col gap-4 sm:gap-12">
                <h2 className="heading-md">Your team of professionals</h2>
                <p className="text-gray-700">
                  {`Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.`}
                </p>
              </div>
            </div>
          </section>
        </div>
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