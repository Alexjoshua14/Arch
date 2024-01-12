'use client'

import { useScreenSize } from '@/lib/hooks/useScreenSize'
import Image from 'next/image'
import { FC } from 'react'

interface HeroProps {
  src: string
  alt: string
  header: string
  title: string
  description: string
}

const Hero: FC<HeroProps> = ({ src, alt, header, title, description }) => {
  const { screenSize } = useScreenSize()

  return (
    <div className="w-full h-full xs:page-gutter-x">
      <section className="relative w-full h-fit flex flex-col ">
        <div className="relative w-full aspect-[375/240] xs:aspect-[573/635] sm:aspect-auto lg:w-[635px] sm:h-[720px]" >
          <Image
            src={src.replace('SIZE', screenSize)}
            alt={alt}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative xs:absolute xs:bottom-0 xs:right-0 w-fit h-fit mr-8 -mt-10 xs:mt-0 xs:mr-0 pr-10 xs:pr-0 pl-10 lg:pl-44 pt-12 xs:pt-10 sm:pt-44 bg-white">
          <div className="hidden sm:flex absolute top-0 -translate-y-1/2 right-0">
            <h1 className="heading-xl">
              {header}
            </h1>
          </div>
          <div className="max-w-[446px] flex flex-col gap-4 sm:gap-12">
            <h2 className="heading-md">
              {title}
            </h2>
            <p className="text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero