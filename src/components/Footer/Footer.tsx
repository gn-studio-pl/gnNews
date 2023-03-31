import { Container, Text } from './Footer.styled';
import { useAppSelector } from '../../redux/store';
import { useTimer } from '../../hooks/useTimer';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const { quantity } = useAppSelector().article;
  const { time } = useTimer();

  return (
    <Container>
      <Text>
        {t('footer:articles')} {quantity}
      </Text>
      <Text>&copy; gnNews 2023 </Text>
      <Text>{time.format('HH:mm:ss')}</Text>
    </Container>
  );
};
