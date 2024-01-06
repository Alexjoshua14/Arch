import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {

}

const Overlay: FC<OverlayProps> = ({ className, ...props }) => {
  return (
    <div className={cn("absolute left-0 top-0 w-full h-full bg-gray-900/40", className)} role="overlay" {...props} />
  )
}

export default Overlay