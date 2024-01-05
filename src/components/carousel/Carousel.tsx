'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'

interface CarouselProps {

}

const images = [
  {
    src: "/assets/home/SIZE/image-hero-paramour.jpg",
    alt: "Paramour hero image",
    title: "Project Paramour",
    description: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    link: "/",
    linkText: "See Our Portfolio"
  },
  {
    src: "/assets/home/SIZE/image-hero-seraph.jpg",
    alt: "Seraph hero image",
    title: "Project Seraph",
    description: "description goes right here in this very spot so all can see.",
    link: "/",
    linkText: "See Our Portfolio"
  },
  {
    src: "/assets/home/SIZE/image-hero-federal.jpg",
    alt: "Federal hero image",
    title: "Project Federal",
    description: "description goes right here in this very spot so all can see.",
    link: "/",
    linkText: "See Our Portfolio"
  },
  {
    src: "/assets/home/SIZE/image-hero-trinity.jpg",
    alt: "Trinity hero image",
    title: "Project Trinity",
    description: "description goes right here in this very spot so all can see.",
    link: "/",
    linkText: "See Our Portfolio"
  }
]

const Carousel: FC<CarouselProps> = ({ }) => {
  const width = 1440
  const size: 'desktop' | 'tablet' | 'mobile' = 'desktop'

  const [image, setImage] = useState(images[0])

  return (
    <div className="relative w-full h-full">
      <div className="relative">
        <Image src={image.src.replace("SIZE", size)} alt={image.alt} width={1110} height={720} quality={100} />
        <div className="absolute left-0 top-0 z-10 w-full h-full bg-gray-900/40" role="overlay" />
        <div className="z-20 absolute top-1/2 -translate-y-1/2 left-[12.5rem] w-96 text-white">
          <div className="flex flex-col gap-4 pb-8">
            <h2 className="heading-lg">
              {image.title}
            </h2>
            <p>
              {image.description}
            </p>
          </div>
          <Button text={image.linkText} arrow />
        </div>
      </div>
      <div className="z-20 absolute bottom-0 left-0 -translate-x-20 w-80 h-20 flex">
        {images.map((image, index) => (
          <Button
            key={`carousel-control-${index}`}
            variant='secondary'
            text={index.toString().padStart(2, '0')}
            onClick={() => setImage(image)}
            className={index != 0 ? 'bg-white text-gray-900' : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel