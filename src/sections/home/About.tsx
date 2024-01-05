import Button from '@/components/Button'
import Image from 'next/image'
import { FC } from 'react'

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
  return (
    <div className="relative section w-full h-fit">
      <div className='z-20 absolute top-1/2 -translate-y-1/2 left-48 w-[448px] flex flex-col gap-7 text-white'>
        <h2 className="heading-md">
          {`Small team, big ideas`}
        </h2>
        <Button text='About Us' className="w-fit" arrow />
      </div>
      <div className="relative h-fit w-full">
        <Image src="/assets/home/desktop/image-small-team.jpg" alt="" width={1110} height={560} />
        <div className="z-10 absolute left-0 top-0 w-full h-full bg-gray-900/55" />
      </div>
    </div>
  )
}

export default About