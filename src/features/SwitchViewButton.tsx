import React from 'react'
import { AiOutlineTable, AiOutlineUnorderedList } from 'react-icons/ai'
import {
  appData,
  setGridContentView,
  setListContentView
} from '../app/features/appSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Icon } from '../components'

const SwitchViewButton = () => {
  const dispatch = useAppDispatch()
  const contentView = useAppSelector(appData.getContentView)

  function switchContentView(): void {
    contentView === 'grid'
      ? dispatch(setListContentView())
      : dispatch(setGridContentView())
  }

  return (
    <Icon
      classes="mr-4 hover:bg-lightgray transition ease-in-out duration-300"
      title="switch between list or tiles view content"
      size={24}
      onClick={switchContentView}
      iconType={
        contentView === 'grid' ? AiOutlineTable : AiOutlineUnorderedList
      }
    />
  )
}

export default SwitchViewButton
