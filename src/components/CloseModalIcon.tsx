import React, { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Icon from './Icon'

interface ICloseMOdalProps {
  onClickClose: () => void
}

const CloseModalIcon: FC<ICloseMOdalProps> = ({ onClickClose }) => {
  return (
    <Icon
      title="close poup"
      classes="mb-2"
      onClick={onClickClose}
      iconType={AiOutlineClose}
    />
  )
}

export default CloseModalIcon
