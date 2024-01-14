'use client'

import { useScreenSize } from '@/lib/hooks/useScreenSize'
import Image from 'next/image'
import { FC, Suspense } from 'react'

interface MapProps {

}

/**
 * Map component for the contact page
 */
const Map: FC<MapProps> = ({ }) => {
  const { screenSize } = useScreenSize()

  return (
    <section className="relative w-full h-auto aspect-[375/367] xs:aspect-[572/560] md:aspect-[1110/560]">
      <h2 className="hidden">
        Map
      </h2>
      <Suspense fallback={<div className="w-full h-full bg-blue-500/40 border-[1px] border-blue-200/20" />}>
        <Image src={`/assets/contact/${screenSize}/image-map.png`} alt="" fill quality={100} className="object-cover" />
      </Suspense>
    </section>
  )
}

export default Map