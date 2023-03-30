import React from 'react'
import { registerModal } from '../../app/features/appSlice'
import { useAppDispatch } from '../../app/hooks'
import { TextBold } from '../../components'
import { MODALS } from '../../constant/modalsId'

const AboutMeButton = () => {
  const dispatch = useAppDispatch()

  function showAboutMe(): void {
    dispatch(registerModal(MODALS.id.aboutMe))
  }

  return (
    <button type="button" onClick={showAboutMe}>
      <TextBold>About me</TextBold>
    </button>
  )
}

export default AboutMeButton
