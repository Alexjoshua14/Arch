import Image from 'next/image'
import { FC } from 'react'

interface WelcomeProps {

}

const Welcome: FC<WelcomeProps> = ({ }) => {
  return (
    <section className="relative w-full section flex flex-col">
      <h1 className="hidden sm:block z-10 heading-xl -mb-9">
        {`Welcome`}
      </h1>
      <div className="relative w-full md:pr-[350px] flex items-center justify-start md:justify-center">
        <div className="z-20 w-full max-w-[446px] flex flex-col gap-10">
          <h2 className="heading-md">
            {`Welcome to Arch Studio`}
          </h2>
          <div className="text-gray-700 flex flex-col gap-6">
            <p>
              {`We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.`}
            </p>
            <p>
              {`Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.`}
            </p>
            <p>
              {`We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.`}
            </p>
          </div>
        </div>
        <div className="hidden md:flex absolute right-0 bottom-0 h-fit w-1/2 max-w-[350px]">
          <Image src="/assets/home/desktop/image-welcome.jpg" alt="" width={350} height={568} className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Welcome