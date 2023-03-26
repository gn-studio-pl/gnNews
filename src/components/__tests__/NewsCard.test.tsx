import { fireEvent, render } from '@testing-library/react';
import dayjs from 'dayjs';
import NewsCard from 'components/MainContent/NewsCard/NewsCard';

describe('NewsCard', () => {
  const onClickMock = jest.fn();

  const news = {
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet',
    title: 'Test news title',
    url: 'https://testnews.com',
    urlToImage: 'https://testnews.com/image.jpg',
    publishedAt: new Date(),
    source: {
      id: 'test-news',
      name: 'Test News',
    },
  };

  it('renders news card with correct data', () => {
    const { getByRole, getByText } = render(
      <NewsCard
        onClick={onClickMock}
        author={news.author}
        content={news.content}
        description={news.description}
        title={news.title}
        url={news.url}
        urlToImage={news.urlToImage}
        publishedAt={news.publishedAt}
        source={news.source}
      />
    );

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(news.title)).toBeInTheDocument();
    expect(getByText(news.source.name)).toBeInTheDocument();
    expect(getByText(dayjs(news.publishedAt).format('DD-MM-YYYY'))).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', news.urlToImage);
    expect(getByRole('img')).toHaveAttribute('alt', news.title);

    fireEvent.click(getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
