import Button from '@/components/Button'
import Carousel from '@/components/carousel/Carousel'
import About from '@/sections/home/About'
import Featured from '@/sections/home/Featured'
import Hero from '@/sections/home/Hero'
import Welcome from '@/sections/home/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between page-gutter">
      <div className="max-w-6xl">
        <Hero />
        <Welcome />
        <About />
        <Featured />
      </div>
    </main>
  )
}
