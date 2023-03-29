import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../constant/screenSize'

interface IDesktopProps {
  children: React.ReactNode
}

const Desktop: FC<IDesktopProps> = ({ children }) => {
  const isDesktop = useMediaQuery({
    minWidth: SCREEN.size.desktop.min
  })
  return <>{isDesktop && children}</>
}

export default Desktop
