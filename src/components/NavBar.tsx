'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavBarProps {

}

export const navOptions = [
  {
    name: 'Portfolio',
    path: '/portfolio'
  },
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
]

const NavBar: FC<NavBarProps> = ({ }) => {
  const pathname = usePathname()

  let pageName = pathname

  if (pathname === '/') {
    pageName = 'Home'
  }

  pageName = pageName.replace('/', '').toUpperCase()

  return (
    <>
      <div className="z-50 absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 whitespace-nowrap nav-side hidden xs:block">
        <div className="cursor-vertical-text flex items-center gap-12 w-fit origin-left rotate-90">
          <div className="w-[104px] h-[2px] bg-gray-100" />
          <p className="text-gray-100 text-lg/[24px] tracking-[18px]">
            {pageName}
          </p>
        </div>
      </div>
      <nav className="flex gap-14 items-center navBar backdrop-blur-3xl">
        <Link href="/" className="text-4xl font-extrabold tracking-tighter">
          Arch
        </Link>
        <ul className="flex gap-14 whitespace-nowrap">
          {navOptions.map((option) => (
            <li key={`nav-${option.name}`}>
              <Link href={option.path} className="link">
                {option.name}
              </Link>
            </li>
          ))


          }
        </ul>
      </nav>
    </>
  )
}

export default NavBar