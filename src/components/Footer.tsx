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
    <div className="relative footer flex items-center justify-center">
      <div className="relative h-full w-full max-w-6xl flex">
        <div className="h-full aspect-square bg-gray-900 flex items-center justify-center">
          <span className="text-5xl font-extrabold tracking-tighter text-white">
            {`Arch`}
          </span>
        </div>
        <div className="h-full w-[73%] bg-gray-100 px-24">
          <ul className="h-full flex items-center gap-16">
            {navOptions.map((option) => (
              <li key={`footer-nav-${option.name}`}>
                <Link href={option.path} className="link">
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Button text="See Our Portfolio" arrow />
        </div>
      </div>
    </div>
  )
}

export default Footer