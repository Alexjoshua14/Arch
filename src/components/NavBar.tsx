'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
          <div className="w-[104px] h-[2px] bg-gray-300" />
          <p className="text-gray-300 text-lg/[24px] tracking-[18px]">
            {pageName}
          </p>
        </div>
      </div>

      <nav className="xs:hidden z-50 sticky top-0 h-24">

        <div className="z-50 w-full h-full page-gutter-x flex items-center justify-between backdrop-blur-3xl">
          <Link href="/" className="text-4xl font-extrabold tracking-tighter">
            Arch
          </Link>
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label='Menu toggle'
          >
            <Image
              src="/assets/icons/icon-hamburger.svg"
              alt="Menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className={`z-10 absolute w-11/12 h-fit right-0 bottom-0 p-10 bg-gray-100`}
                initial={{ opacity: 0, y: 0, zIndex: -1 }}
                animate={{ opacity: 1, y: '100%' }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 1, ease: 'anticipate' }}
              >
                <ul className="z-10 flex flex-col gap-4 whitespace-nowrap">
                  {navOptions.map((option) => (
                    <li key={`nav-${option.name}`}>
                      <Link href={option.path} className="link-mobile">
                        {option.name}
                      </Link>
                    </li>
                  ))
                  }
                </ul>
              </motion.div>
              <motion.div
                className={`z-0 absolute top-0 left-0 w-screen h-[calc(100vh-100%)] translate-y-24 bg-black/50`}
                initial={{ opacity: 0, zIndex: -2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'anticipate' }}

              />
            </>
          )}
        </AnimatePresence>
      </nav>

      <nav className="hidden xs:flex gap-14 items-center navBar backdrop-blur-3xl">
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