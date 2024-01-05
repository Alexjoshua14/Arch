import Button from '@/components/Button'
import Carousel from '@/components/carousel/Carousel'
import Hero from '@/sections/home/Hero'
import Welcome from '@/sections/home/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between page-gutter">
      <div className="max-w-6xl">
        <Hero />
        <Welcome />
      </div>
    </main>
  )
}
