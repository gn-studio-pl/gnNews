import { NewsModal } from './NewsModal/NewsModal';
import { useCountry } from './useCountry';
import dayjs from 'dayjs';
import {
  Article,
  Footer,
  Header,
  Img,
  ImgWrapper,
  Section,
  Text,
  Title,
  Wrapper,
} from './Country.styled';

export const Country = () => {
  const { articles, handleOpenModal, newsModal, selectedArticle, view } =
    useCountry();

  return (
    <div>
      <Article isGridView={view === 'grid'}>
        {articles?.map(({ publishedAt, source, title, url, urlToImage }) => (
          <Section
            key={url}
            onClick={() => handleOpenModal(title)}
            isGridView={view === 'grid'}
          >
            <ImgWrapper>
              <Img src={urlToImage} alt={title} loading={'lazy'} />
            </ImgWrapper>
            <Wrapper>
              <Header>
                <Title>{title}</Title>
              </Header>
              <Footer>
                <Text>{source.name}</Text>
                <Text>{dayjs(publishedAt).format('YYYY-MM-DD HH:mm:ss')} </Text>
              </Footer>
            </Wrapper>
          </Section>
        ))}
      </Article>

      {newsModal.open && <NewsModal {...newsModal} {...selectedArticle} />}
    </div>
  );
};
