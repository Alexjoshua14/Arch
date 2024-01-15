import { FC } from 'react'
import Image from 'next/image'
import Overlay from '../image/Overlay'
import Button from '../Button'

interface CarouselImageProps {
  src: string
  alt: string
  title: string
  description: string
  link: string
  linkText: string
}

/**
 * Image component for the carousel
 * 
 */
const CarouselImage: FC<CarouselImageProps> = ({ src, alt, title, description, link, linkText }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-auto object-contain"
        quality={100}
      />
      <div className="z-10 absolute left-0 bottom-0 w-full h-full bg-black/25" />
      <div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[17%] w-3/4 xs:w-fit max-w-[544px] text-white">
        <div className="flex flex-col gap-4 pb-8">
          <h2 className="heading-lg">
            {title}
          </h2>
          <p>
            {description}
          </p>
        </div>
        <Button text={linkText} arrow />
      </div>
    </div>
  )
}

export default CarouselImage