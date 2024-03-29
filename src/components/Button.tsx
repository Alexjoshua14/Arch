import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
  arrow?: boolean
  variant?: 'primary' | 'secondary'
}

/**
 * Button component 
 * 
 * @param {string} text - Button text
 * @param {boolean} arrow - Whether to show the arrow
 * @param {string} variant - Button variant (primary or secondary)
 * @param {string} className - Additional classes
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - Additional props
 */
const Button: FC<ButtonProps> = ({ className, text, arrow, variant, ...props }) => {
  return (
    <button className={cn(`${variant === 'secondary' ? "w-14 h-14 xl:w-20 xl:h-20" : "px-8 py-6"} flex items-center justify-center gap-6 btn`, className)} {...props}>
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