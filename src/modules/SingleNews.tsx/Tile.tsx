import React from 'react';
import { Card, CardBody, CardLink, CardSubtitle, CardFooter } from 'reactstrap';

type Props = {
  news: {
    title: string;
    url: string;
    author: string;
    urlToImage: string | null;
    publishedAt: string;
  };
};

const Tile = ({ news }: Props) => {
  const today = new Date();
  console.log(today);
  console.log(news);
  return (
    <Card
      className="me-3 mb-4 d-flex align-items-center"
      style={{
        width: '30rem',
        height: '10rem',
      }}
    >
      <CardBody className="d-flex h-75">
        <div className="d-flex flex-column">
          <CardSubtitle>{news.author}</CardSubtitle>
          <CardLink className="text-black card-text overflow-hidden text-decoration-none" href={news.url}>
            <h5>{news.title}</h5>
          </CardLink>
        </div>
        <img
          alt="Card cap"
          src={news.urlToImage ? news.urlToImage : process.env.PUBLIC_URL + '/images/logo.png'}
          className="rounded-2 ms-4"
        />
      </CardBody>
      <CardFooter className="bg-white border-0 justify-content-start w-100">
        {news.publishedAt.replace(/T|Z/g, ' ').slice(0, 16)}
      </CardFooter>
    </Card>
  );
};

export default Tile;
