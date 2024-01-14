import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {

}

/**
 * Overlay component with gradient covering the bottom half of the image.
 * 
 * Gradient moves from bottom to top, from 50% opacity black to transparent
 * 
 * Has a 50% opacity white overlay on hover
 * 
 */
const Overlay: FC<OverlayProps> = ({ className, ...props }) => {
  return (
    <>
      <div className={cn("z-10 absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-black/0 group-hover:bg-gray-", className)} role="overlay" {...props} />
      <div className="z-20 absolute left-0 bottom-0 w-full h-full group-hover:bg-white/50 transition-all" />
    </>
  )
}

export default Overlay