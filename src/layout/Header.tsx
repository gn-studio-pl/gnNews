import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Icon, Logo, Section } from '../components'
import { Desktop, MobileTablet } from '../components/responsive'
import { registerModal } from '../app/features/appSlice'
import { MODALS } from '../constant/modalsId'
import AboutMeButton from '../features/about-me/AboutMeButton'
import SwitchViewButton from '../features/SwitchViewButton'
import { useAppDispatch } from '../app/hooks'

const Header = () => {
  const dispatch = useAppDispatch()

  function showMobileMenu(): void {
    dispatch(registerModal(MODALS.id.menuMobile))
  }

  return (
    <header className="sticky top-0 z-50 w-full duration-500 bg-white border-b-lightgray border-b border-solid">
      <Section className="py-4 flex justify-between items-center">
        <div className="flex">
          <MobileTablet>
            <Icon
              classes="mr-2"
              title="click to open menu"
              onClick={showMobileMenu}
              iconType={RxHamburgerMenu}
            />
          </MobileTablet>

          <Logo />
        </div>

        <div className="flex items-center">
          <Desktop>
            <SwitchViewButton />
            <AboutMeButton />
          </Desktop>
        </div>
      </Section>
    </header>
  )
}

export default Header
