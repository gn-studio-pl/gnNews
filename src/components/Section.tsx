import React, { FC } from 'react'

interface ISectionProps {
  className?: string
  children: React.ReactNode
}

const Section: FC<ISectionProps> = ({ className, children }) => {
  return (
    <div
      className={`${
        className || ''
      } max-w-8xl mx-auto px-4 mobile:px-6 tablet:px-8`}>
      {children}
    </div>
  )
}

export default Section
