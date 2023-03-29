import axios from 'axios';
import React, { useState } from 'react';
import { ModalTitle } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Modal, Button, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';

import { Article } from '../../types/types';
import NewsModal from './NewsModal';
import Tile from './Tile';

type Props = {
  data: Article[];
};

const SingleNews = ({ data }: Props) => {
  const isTile = useSelector((state: any) => state.isTileFormat);
  const [content, setContent] = useState('');

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const listContent = () => {
    return (
      data &&
      data.slice(4).map((news) => {
        return (
          <li className="list-group-item w-100" key={news.url}>
            <p className="mb-1">{news.publishedAt.replace(/T|Z/g, ' ').slice(0, 16)}</p>
            <button
              className="text-decoration-none text-start card-text text-black border-0 bg-white p-0"
              onClick={() => {
                toggle();
                setContent(news.url);
              }}
            >
              <p className="fs-4">{news.title}</p>
            </button>
          </li>
        );
      })
    );
  };

  const tileContent = () => {
    return (
      data &&
      data.slice(4).map((news) => {
        return <Tile key={news.url} news={news} />;
      })
    );
  };

  return (
    <div className="pt-5">
      {isTile ? (
        <ul className="list-group">{listContent()}</ul>
      ) : (
        <div className="d-flex justify-content-around flex-wrap">{tileContent()}</div>
      )}
      <NewsModal modal={modal} setModal={setModal} content={content} setContent={setContent} />
    </div>
  );
};

export default SingleNews;
