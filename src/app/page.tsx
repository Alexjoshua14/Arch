import Button from '@/components/Button'
import Carousel from '@/components/carousel/Carousel'
import About from '@/sections/home/About'
import Featured from '@/sections/home/Featured'
import Hero from '@/sections/home/Hero'
import Welcome from '@/sections/home/Welcome'
import Image from 'next/image'

/**
 * Home page with Hero, Welcome, About, and Featured sections
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-7xl w-full page-gutter-y">
        <Hero />
        <div className="w-full page-gutter-x">
          <Welcome />
        </div>
        <div className="w-full xs:page-gutter-x">
          <About />
        </div>
        <div className="w-full page-gutter-x">
          <Featured />
        </div>
      </div>
    </main>
  )
}
