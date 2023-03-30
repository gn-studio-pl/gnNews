import React, { FC } from 'react'

interface ITextBoldProps {
  children: React.ReactNode
  className?: string
}

const TextBold: FC<ITextBoldProps> = ({ children, className }) => {
  const classNames =
    'font-sans font-semibold text-primary leading-normal' +
    ` ${className || ''}`

  return <p className={classNames}>{children}</p>
}

export default TextBold
