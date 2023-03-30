import React, { FC } from 'react'
import { appData } from './app/features/appSlice'
import { useAppSelector } from './app/hooks'
import { Menu, Modal, Section, Text, TextBold } from './components'
import { Desktop, MobileTablet } from './components/responsive'
import { MODALS } from './constant/modalsId'
import AboutMeButton from './features/about-me/AboutMeButton'
import AboutMeContent from './features/about-me/AboutMeContent'
import { NewsCard } from './features/news'
import SwitchViewButton from './features/SwitchViewButton'
import { Footer, Header, SideBar } from './layout'

interface IAppProps {
  children: React.ReactNode
}

const App: FC<IAppProps> = ({ children }) => {
  const activeModal = useAppSelector(appData.getActiveModal)

  return (
    <>
      <MobileTablet>
        {activeModal === MODALS.id.menuMobile && (
          <Modal position="left">
            <div className="flex items-center">
              <SwitchViewButton />
              <AboutMeButton />
            </div>

            <TextBold className="my-8">News from country</TextBold>
            <Menu />
          </Modal>
        )}
      </MobileTablet>

      {activeModal === MODALS.id.newsCard && (
        <Modal position="center">
          <NewsCard />
        </Modal>
      )}

      {activeModal === MODALS.id.aboutMe && (
        <Modal position="center">
          <AboutMeContent />
        </Modal>
      )}

      <Header />

      <Section>
        <Desktop>
          <SideBar />
        </Desktop>

        {children}

        <Footer />
      </Section>
    </>
  )
}

export default App
