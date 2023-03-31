import { ButtonWrap, ModalWrapper, Overlay } from './Modal.styled';
import { GiCancel } from 'react-icons/gi';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
}

export const Modal = ({ children, handleClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={handleClose} />
      <ModalWrapper>
        <ButtonWrap onClick={handleClose}>
          <GiCancel />
        </ButtonWrap>
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('modal')!,
  );
};
