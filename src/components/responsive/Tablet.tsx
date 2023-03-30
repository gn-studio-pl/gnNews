import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../constant/screenSize'

interface ITabletProps {
  children: React.ReactNode
}

const Tablet: FC<ITabletProps> = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: SCREEN.size.tablet.min,
    maxWidth: SCREEN.size.tablet.max
  })
  return <>{isTablet && children}</>
}

export default Tablet
