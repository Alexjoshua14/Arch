'use client'

import Button from '@/components/Button'
import { useScreenSize } from '@/lib/hooks/useScreenSize'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

interface FeaturedProps {

}

const featuredData = [
  {
    src: "/assets/portfolio/SIZE/image-del-sol.jpg",
    alt: "Project Del Sol",
    title: "Project Del Sol",
  },
  {
    src: "/assets/portfolio/SIZE/image-228b.jpg",
    alt: "228B Tower",
    title: "228B Tower",
  },
  {
    src: "/assets/portfolio/SIZE/image-prototype.jpg",
    alt: "Le Prototype",
    title: "Le Prototype",
  },
]

const Featured: FC<FeaturedProps> = ({ }) => {
  const { screenSize } = useScreenSize()

  return (
    <section className="section">
      <div className="py-14 flex justify-between">
        <h1 className="heading-md">
          {`Featured`}
        </h1>
        <Button text="See All" arrow />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row justify-between gap-4">
        {
          featuredData.map((item, index) => (
            <div key={`Featured-${item.title}`} className="relative w-full h-fit overflow-clip">
              <div>
                <Image src={item.src.replace('SIZE', screenSize)} alt={item.alt} width={350} height={560} className="w-full h-auto object-contain" />
                <div className="absolute left-0 top-0 w-full h-full bg-gray-900/20" />
              </div>
              <div className="absolute -right-3 top-4">
                <span className="heading-xl !text-white/50">
                  {`${index + 1}`}
                </span>
              </div>

              <div className="absolute left-0 bottom-0 p-10 text-white">
                <h3 className="heading-sm">
                  {item.title}
                </h3>
                <Link href="/portfolio" className="text-lg font-medium">
                  {`View All Projecst`}
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Featured