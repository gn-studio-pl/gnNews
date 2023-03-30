import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../constant/screenSize'

interface IMobileProps {
  children: React.ReactNode
}

const Mobile: FC<IMobileProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: SCREEN.size.mobile.max })
  return <>{isMobile && children}</>
}

export default Mobile
