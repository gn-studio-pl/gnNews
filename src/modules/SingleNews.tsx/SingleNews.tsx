import React from 'react';
import { JsxElement } from 'typescript';

const SingleNews = ({ data }: any) => {
  const reduxFunctionality = true;

  const listContent = () => {
    return (
      data &&
      data.map((el: any) => {
        return (
          <li className="list-group-item">
            <div>
              <h5>{el.title}</h5>
              <a href={el.link}>{el.link}</a>
            </div>
          </li>
        );
      })
    );
  };

  const tileContent = () => {
    return (
      data &&
      data.map((el: any) => {
        const mediaUrl = el.media;
        console.log(el && el.media);
        return (
          <div className="d-flex flex-column m-2 border border-dark" style={{ width: 300 }}>
            {mediaUrl && mediaUrl.startsWith('http') ? (
              <img src={mediaUrl} alt="media-test" className="img-fluid" />
            ) : (
              <img src="'../../images/logo.jpg';" alt="media" className="img-fluid" />
            )}
            <p>{el.title}</p>
          </div>
        );
      })
    );
  };

  return reduxFunctionality ? (
    <div className="container d-flex flex-wrap">{tileContent()}</div>
  ) : (
    <ul className="list-group">{listContent()}</ul>
  );
};

export default SingleNews;
