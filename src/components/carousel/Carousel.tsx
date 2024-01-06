'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import Overlay from '../image/Overlay'

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
    title: "Seraph Station",
    description: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    link: "/",
    linkText: "See Our Portfolio"
  },
  {
    src: "/assets/home/SIZE/image-hero-federal.jpg",
    alt: "Federal hero image",
    title: "Federal II Tower",
    description: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    link: "/",
    linkText: "See Our Portfolio"
  },
  {
    src: "/assets/home/SIZE/image-hero-trinity.jpg",
    alt: "Trinity hero image",
    title: "Trinity Bank Tower",
    description: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    link: "/",
    linkText: "See Our Portfolio"
  }
]

const Carousel: FC<CarouselProps> = ({ }) => {
  const width = 1440
  const size: 'desktop' | 'tablet' | 'mobile' = 'desktop'

  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="relative w-full h-full">
      <div className="relative">
        <Image src={selectedImage.src.replace("SIZE", size)} alt={selectedImage.alt} width={1110} height={720} quality={100} />
        <Overlay />
        <div className="z-20 absolute top-1/2 -translate-y-1/2 left-[12.5rem] w-[544px] text-white">
          <div className="flex flex-col gap-4 pb-8">
            <h2 className="heading-lg">
              {selectedImage.title}
            </h2>
            <p>
              {selectedImage.description}
            </p>
          </div>
          <Button text={selectedImage.linkText} arrow />
        </div>
      </div>
      <div className="z-20 absolute bottom-0 left-0 -translate-x-1/4 w-fit h-fit flex">
        {images.map((image, index) => (
          <Button
            key={`carousel-control-${index}`}
            variant='secondary'
            text={(index + 1).toString().padStart(2, '0')}
            onClick={() => setSelectedImage(image)}
            className={selectedImage.title === image.title ? 'bg-gray-900 text-white' : 'bg-white text-gray-500'}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel