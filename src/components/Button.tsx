import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string
  arrow?: boolean
  variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ className, text, arrow, variant, ...props }) => {
  return (
    <button className={cn(`${variant === 'secondary' ? "w-20 h-20" : "px-8 py-6"} flex items-center justify-center gap-6 btn`, className)} {...props}>
      {text &&
        <p>
          {text}
        </p>
      }
      {arrow && (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2">
            <path d="M15 1l9 9-9 9M0 10h24" />
          </g>
        </svg>
      )}
    </button>
  )
}

export default Button