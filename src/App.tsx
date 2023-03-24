import React, { FC } from 'react'
import { Header, Layout } from './components'
import { Footer, SideBar } from './layout'
import { Home } from './pages'

console.log(process.env.REACT_APP_NEWS_API_KEY)

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
