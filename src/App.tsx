import React, { FC } from 'react'
import { Header, Layout } from './components'
import { Footer, SideBar } from './layout'

interface IAppProps {
  children: React.ReactNode
}

const App: FC<IAppProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
      <SideBar />
      <Footer />
    </Layout>
  )
}

export default App
