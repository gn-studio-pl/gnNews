import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../constant/screenSize'

interface IMobileTabletProps {
  children: React.ReactNode
}

const MobileTablet: FC<IMobileTabletProps> = ({ children }) => {
  const isMobileTablet = useMediaQuery({
    maxWidth: SCREEN.size.tablet.max
  })
  return <>{isMobileTablet && children}</>
}

export default MobileTablet
