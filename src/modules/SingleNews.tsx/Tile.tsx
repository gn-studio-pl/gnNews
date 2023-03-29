import React from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, CardText, CardLink, CardFooter } from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';

type Props = {
  news: {
    title: string;
    url: string;
    author: string;
    urlToImage: string | null;
    publishedAt: string;
    description: string;
    source: { name: string };
  };
};

const Tile = ({ news }: Props) => {
  const today = new Date();

  return (
    <Card
      style={{
        width: '23rem',
        height: '10rem',
      }}
      className=" rounded mb-3 border bg-light border-opacity-50"
    >
      <CardBody className="card-body">
        <div className="w-100 d-flex align-items-start">
          <Dotdotdot clamp={3}>
            <CardLink className="w-75 text-decoration-none card-text text-dark fs-5" href={news.url}>
              {news.title}
            </CardLink>
          </Dotdotdot>
          <img
            alt="Sample"
            src={`${news.urlToImage}`}
            style={{ width: '80x', height: '80px' }}
            className="img-class rounded w-25 ms-2"
          />
        </div>
      </CardBody>
      <CardFooter className="bg-light border-0 h-25 d-flex justify-content-between w-100">
        <span>{news.publishedAt.replace(/T|Z/g, ' ').slice(0, 16)}</span>
        <span>{news.source.name}</span>
      </CardFooter>
    </Card>
  );
};

export default Tile;
