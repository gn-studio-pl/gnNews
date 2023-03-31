import { useTranslation } from 'react-i18next';
import { Text, Title, Wrapper } from './Home.styled';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('homePage:hi')}</Title>
      <Text>{t('homePage:instruction')}</Text>
    </Wrapper>
  );
};
