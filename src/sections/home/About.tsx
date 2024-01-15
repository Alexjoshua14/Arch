'use client'

import Button from '@/components/Button'
import { useScreenSize } from '@/lib/hooks/useScreenSize'
import Image from 'next/image'
import { FC } from 'react'

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
  const { screenSize } = useScreenSize()

  return (
    <div className="relative section w-full h-fit">
      <div className='z-20 absolute top-1/2 -translate-y-1/2 left-[10%] sm:left-[20%] w-full max-w-[240px] xs:max-w-[448px] flex flex-col gap-4 sm:gap-7 text-white'>
        <h2 className="heading-md">
          {`Small team, big ideas`}
        </h2>
        <Button text='About Us' className="w-fit" arrow />
      </div>
      <div className="relative h-fit w-full">
        <Image src={`/assets/home/SIZE/image-small-team.jpg`.replace("SIZE", screenSize)} alt="" width={1110} height={560} />
        <div className="z-10 absolute left-0 top-0 w-full h-full bg-gray-900/55" />
      </div>
    </div>
  )
}

export default About