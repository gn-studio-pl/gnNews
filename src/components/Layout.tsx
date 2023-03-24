import React, { FC } from 'react'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>
}

export default Layout
