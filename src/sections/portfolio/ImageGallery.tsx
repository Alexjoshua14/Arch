'use client'

import GalleryImage from '@/components/image/GalleryImage'
import { Skeleton } from '@/components/ui/skeleton'
import { useScreenSize } from '@/lib/hooks/useScreenSize'
import { FC, Suspense } from 'react'

interface ImageGalleryProps {

}

const portfolioContent = [
  {
    src: "/assets/portfolio/SIZE/image-seraph.jpg",
    alt: "Image of Seraph Station",
    title: "Seraph Station",
    date: "September 2019"
  },
  {
    src: "/assets/portfolio/SIZE/image-eebox.jpg",
    alt: "Image of Eebox Building",
    title: "Eebox Building",
    date: "August 2017"
  },
  {
    src: "/assets/portfolio/SIZE/image-federal.jpg",
    alt: "Image of Federal II Tower",
    title: "Federal II Tower",
    date: "March 2017"
  },
  {
    src: "/assets/portfolio/SIZE/image-del-sol.jpg",
    alt: "Image of Project Del Sol",
    title: "Project Del Sol",
    date: "January 2016"
  },
  {
    src: "/assets/portfolio/SIZE/image-prototype.jpg",
    alt: "Geometrically pleasing image of Le Prototype",
    title: "Le Prototype",
    date: "February 2020"
  },
  {
    src: "/assets/portfolio/SIZE/image-228b.jpg",
    alt: "Image of sun glistening on 228B Tower",
    title: "228B Tower",
    date: "September 2019"
  },
  {
    src: "/assets/portfolio/SIZE/image-edelweiss.jpg",
    alt: "Image of Edelweiss",
    title: "Grand Edelweiss Hotel",
    date: "December 2013"
  },
  {
    src: "/assets/portfolio/SIZE/image-netcry.jpg",
    alt: "Image of Netcry Tower",
    title: "Netcry Tower",
    date: "August 2020"
  },
  {
    src: "/assets/portfolio/SIZE/image-hypers.jpg",
    alt: "Image of Hypers",
    title: "Hypers",
    date: "January 2012",
  },
  {
    src: '/assets/portfolio/SIZE/image-sxiv.jpg',
    alt: "Image of SXIV",
    title: "SXIV",
    date: "March 2011"
  },
  {
    src: "/assets/portfolio/SIZE/image-trinity.jpg",
    alt: "Image of Trinity Bank Tower",
    title: "Trinity Bank Tower",
    date: "September 2010"
  },
  {
    src: "/assets/portfolio/SIZE/image-paramour.jpg",
    alt: "Image of sun glistening on corner of Project Paramour",
    title: "Project Paramour",
    date: "February 2020"
  },

]

const ImageGallery: FC<ImageGalleryProps> = ({ }) => {
  const { screenSize } = useScreenSize()

  return (
    <div className="w-full min-h-screen h-fit page-gutter flex items-center justify-center">
      <div className="min-w-fit w-full max-w-6xl h-fit flex flex-wrap justify-center items-center gap-4">
        {portfolioContent.map((image, i) => (
          <div key={`image-${i}`} className="min-w-80 md:min-w-60 w-full md:max-w-[350px] h-auto aspect-[573/240] md:aspect-[350/560]">
            <Suspense fallback={<Skeleton className="w-full h-full" />}>
              <GalleryImage src={image.src.replace("SIZE", screenSize)} alt="alt" width={350} height={560} title={image.title} date={image.date} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery