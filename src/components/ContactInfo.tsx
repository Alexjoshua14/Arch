import { FC } from 'react'

interface ContactInfoProps {
  title: string
  mail: string
  address: string
  phone: string
  mapLink: string
}

/**
 * Contact info component for the contact page
 */
export const ContactInfo: FC<ContactInfoProps> = ({ title, mail, address, phone, mapLink }) => {
  return (
    <div className="flex-1 w-full flex justify-between flex-col xs:flex-row lg:flex-col gap-8 xs:gap-4 max-w-[600px]">
      <div className="flex flex-col gap-4 text-gray-700">
        <h3 className="font-bold">
          {title}
        </h3>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p>Mail:</p>
            <p>
              {mail}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Address:</p>
            <p>
              {address}
            </p>
          </div>
          <div className="flex gap-2">
            <p>Phone:</p>
            <p>
              {phone}
            </p>
          </div>
        </div>
      </div>
      <div className="text-black flex gap-4 font-medium xs:self-end lg:self-auto cursor-pointer group">
        <p className="group-hover:underline">
          {`View on Map`}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2">
            <path d="M15 1l9 9-9 9M0 10h24" />
          </g>
        </svg>
      </div>
    </div>
  )
}