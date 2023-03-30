import React, { FC } from 'react'
import { unRegisterModal } from '../app/features/appSlice'
import { useAppDispatch } from '../app/hooks'
import { useOutClick } from '../hooks'
import CloseModalIcon from './CloseModalIcon'

interface IModalProps {
  position: 'left' | 'center'
  children: React.ReactNode
}

const Modal: FC<IModalProps> = ({ children, position }) => {
  const dispatch = useAppDispatch()

  function closeModal(): void {
    dispatch(unRegisterModal())
  }

  const modalLeftRef = useOutClick(closeModal)
  const modalCenterRef = useOutClick(closeModal)

  return (
    <div className="overlay fixed z-100 w-screen h-screen bg-darkgray bg-opacity-40 overflow-y-auto">
      {/* modal aligned left */}
      {position === 'left' && (
        <div className="h-max w-11/12 bg-white p-6" ref={modalLeftRef}>
          <div className="flex justify-end">
            <CloseModalIcon onClickClose={closeModal} />
          </div>
          {children}
        </div>
      )}

      {/* modal center */}
      {position === 'center' && (
        <div
          className="flex justify-center relative top-1/3"
          ref={modalCenterRef}>
          <div className="h-auto w-8/12 desktop:w-6/12 bg-white p-6">
            <div className="flex justify-end">
              <CloseModalIcon onClickClose={closeModal} />
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
