import { countries } from '../../utils/countries';
import { Modal } from '../Modal/Modal';
import { paths } from '../../routes/paths';
import { useEffect } from 'react';
import { UseModal, useModal } from '../../hooks/useModal';
import { useWindowSize } from '../../hooks/useWindowSize';
import {
  Container,
  Country,
  FlagIcon,
  IconWrapper,
  Img,
  Link,
  ModalInner,
} from './Menu.styled';

const List = (modal: UseModal) => (
  <Container>
    {countries.map(({ code, name }) => (
      <Link
        key={code}
        to={paths.country(name)}
        onClick={() => {
          window.scrollTo(0, 0);
          modal.open && modal.handleClose();
        }}
      >
        <Img
          src={`https://flagsapi.com/${code}/shiny/16.png`}
          alt={code}
          loading={'lazy'}
        />
        <Country>{name}</Country>
      </Link>
    ))}
  </Container>
);

export const Menu = () => {
  const modal = useModal();
  const { width } = useWindowSize();

  useEffect(() => {
    width > 640 && modal.open && modal.handleClose();
  }, [width]);

  return (
    <>
      {width < 640 ? (
        <IconWrapper onClick={modal.handleOpen}>
          <FlagIcon />
        </IconWrapper>
      ) : (
        <List {...modal} />
      )}

      {modal.open && (
        <Modal {...modal}>
          <ModalInner>
            <List {...modal} />
          </ModalInner>
        </Modal>
      )}
    </>
  );
};
