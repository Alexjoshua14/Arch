import Image from 'next/image'
import { FC } from 'react'
import Overlay from './Overlay'

interface GalleryImageProps {
  src: string
  alt: string
  width: number
  height: number
  title: string
  date: string
}

/**
 * Image component for the gallery
 */
const GalleryImage: FC<GalleryImageProps> = ({ src, alt, width, height, title, date }) => {
  return (
    <div className="relative w-full h-full group hover:cursor-pointer">
      <Image src={src} alt={alt} width={width} height={height} className="z-0 w-full h-auto object-contain" quality={100} />
      <Overlay />
      <div className="z-40 absolute left-8 bottom-8 w-full text-white">
        <p className="heading-sm">
          {title}
        </p>
        <p>
          {date}
        </p>
      </div>
    </div>
  )
}

export default GalleryImage