import { BiggerText, Img, ImgWrapper, Text, Wrapper } from './JokeModal.styled';
import { Modal } from '../../Modal/Modal';
import { UseModal } from '../../../hooks/useModal';
import { useTranslation } from 'react-i18next';
import joke from '../../../assets/joke.png';

interface JokeModalProps extends UseModal {}

export const JokeModal = ({ ...modalData }: JokeModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal {...modalData}>
      <Wrapper>
        <Text>{t('navigation:popup:difficulty')}</Text>
        <Text>{t('navigation:popup:fun')}</Text>
        <BiggerText>{t('navigation:popup:ending')}</BiggerText>
        <ImgWrapper>
          <Img src={joke} />
        </ImgWrapper>
      </Wrapper>
    </Modal>
  );
};
