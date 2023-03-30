import React, { FC } from 'react'

interface ITextProps {
  children: React.ReactNode
  className?: string
}

const Text: FC<ITextProps> = ({ children, className }) => {
  const classNames =
    'font-sans leading-normal text-primary' + ` ${className || ''}`

  return <p className={classNames}>{children}</p>
}

export default Text
