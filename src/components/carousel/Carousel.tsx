'use client'

import { FC, Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import Overlay from '../image/Overlay'
import { useScreenSize } from '@/lib/hooks/useScreenSize'
import { AnimatePresence } from 'framer-motion'
import CarouselImage from './CarouselImage'
import { motion } from 'framer-motion'

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

/**
 * Carousel component for the home page
 * 
 *  TODO: Correct exit animation 
 */
const Carousel: FC<CarouselProps> = ({ }) => {
  const { screenSize } = useScreenSize()

  const [selectedImage, setSelectedImage] = useState(images[0])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevSelectedIndex, setPrevSelectedIndex] = useState(0)
  const [imageSize, setImageSize] = useState([1110, 720])

  useEffect(() => {
    const imageSizes = new Map([
      ['desktop', [1110, 720]],
      ['tablet', [573, 720]],
      ['mobile', [375, 560]]
    ])

    const dimensions = imageSizes.get(screenSize)

    if (dimensions) {
      setImageSize(dimensions)
    }
  }, [screenSize])



  return (
    <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
      <div style={{ aspectRatio: imageSize[0] / imageSize[1] }} className="relative w-full h-auto">
        <AnimatePresence>
          {images.map((image, index) => {

            if (index === selectedIndex)
              return (
                <motion.div
                  key={`carousel-image-${image.title}`}
                  initial={{ x: `${(index - prevSelectedIndex) * 100}%`, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: `${(index - selectedIndex) * 100}%`, opacity: 0, scale: 0.1 }}
                  transition={{ duration: 1 }}
                  className={`${index === selectedIndex ? 'absolute' : 'hidden'} w-full h-full`}
                >
                  <Suspense fallback={<div className="w-full h-full bg-teal-700/40 border-[1px] border-teal-200/20" />}>
                    <CarouselImage key={`carousel-image-${image.title}`}  {...{ ...image, src: image.src.replace('SIZE', screenSize) }} />
                  </Suspense>
                </motion.div>
              )
          })}
        </AnimatePresence>
      </div>
      <div className="z-20 absolute bottom-0 left-0 -translate-x-1/4 w-fit h-fit hidden min-[900px]:flex">
        {images.map((image, index) => (
          <Button
            key={`carousel-control-${index}`}
            variant='secondary'
            text={(index + 1).toString().padStart(2, '0')}
            onClick={() => { setSelectedImage(image); setSelectedIndex(index); setPrevSelectedIndex(selectedIndex) }}
            className={selectedImage.title === image.title ? 'bg-gray-900 text-white' : 'bg-white text-gray-500'}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel



// < div className = "relative w-full" >
//       <Image
//         src={selectedImage.src.replace("SIZE", screenSize)}
//         alt={selectedImage.alt}
//         width={imageSize[0]}
//         height={imageSize[1]}
//         className="w-full h-auto object-contain"
//         quality={100}
//       />
//       <Overlay />
//       <div className="z-20 absolute top-1/2 -translate-y-1/2 left-[12.5rem] w-full max-w-[544px] text-white">
//         <div className="flex flex-col gap-4 pb-8">
//           <h2 className="heading-lg">
//             {selectedImage.title}
//           </h2>
//           <p>
//             {selectedImage.description}
//           </p>
//         </div>
//         <Button text={selectedImage.linkText} arrow />
//       </div>
//     </div >