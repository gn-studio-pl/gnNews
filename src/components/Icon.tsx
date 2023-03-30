import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'

interface IIconProps {
  iconType: IconType
  title: string
  classes?: string
  size?: 28 | 24
  onClick?: () => void | {}
}

const Icon: FC<IIconProps> = ({ iconType, classes, title, onClick, size }) => {
  const Icon = iconType

  return (
    <Icon
      title={title}
      size={size || 28}
      className={`cursor-pointer inline-block ${classes || ''}`}
      onClick={onClick}
    />
  )
}

export default Icon
