import React, { FC } from 'react'

interface IHeadingProps {
  children: React.ReactNode
}

const Heading: FC<IHeadingProps> = ({ children }) => {
  return <div className="heading">{children}</div>
}

export default Heading
