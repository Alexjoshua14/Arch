'use client'

import { FC } from 'react'
import Button from './Button'
import { navOptions } from './NavBar'
import Link from 'next/link'

interface FooterProps {

}

/**
 * Footer component that displays the Arch logo, navigation links, and a button to see the portfolio
 */
const Footer: FC<FooterProps> = ({ }) => {
  return (
    <div className="w-screen h-fit flex justify-center">
      <div
        className={`relative footer 
                      h-full w-full 
                      pt-20 md:pt-0
                      flex flex-col 
                      items-center 
                      md:flex-row md:items-start 
                      bg-gray-100 md:bg-transparent
                      `}
      >
        <div className="absolute top-0 -translate-y-1/2 md:translate-y-0 md:relative h-[120px] md:h-full w-[120px] md:w-auto aspect-square bg-gray-900 flex items-center justify-center">
          <span className="text-5xl font-extrabold tracking-tighter text-white">
            {`Arch`}
          </span>
        </div>
        <div className="h-full w-2/3 bg-gray-100 px-10 lg:px-24">
          <ul className="h-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16">
            {navOptions.map((option) => (
              <li key={`footer-nav-${option.name}`}>
                <Link href={option.path} className="link">
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-8 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2">
          <Button text="See Our Portfolio" arrow />
        </div>
      </div>
    </div>
  )
}

export default Footer