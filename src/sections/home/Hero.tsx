import Carousel from '@/components/carousel/Carousel'
import { FC } from 'react'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <div className="section">
      <Carousel />
    </div>
  )
}

export default Hero