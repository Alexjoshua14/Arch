import { useEffect, useState } from "react"


/**
 * Used to get the screen size
 * @returns 
 */
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [width, setWidth] = useState<number>(1440)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setScreenSize('desktop')
        setWidth(window.innerWidth)
      } else if (window.innerWidth >= 480) {
        setScreenSize('tablet')
        setWidth(window.innerWidth)
      } else {
        setScreenSize('mobile')
        setWidth(window.innerWidth)
      }
    }

    if (window === undefined) return
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return { screenSize, width }
}