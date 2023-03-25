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
        const mediaUrl = el.urlToImage;
        console.log(mediaUrl);
        return (
          <div className="d-flex flex-column m-2 border border-dark" style={{ width: 200 }}>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="media" className="img-fluid" />

            <p>{el.title}</p>
          </div>
        );
      })
    );
  };

  return reduxFunctionality ? (
    <div className="container d-flex justify-content-center flex-wrap">{tileContent()}</div>
  ) : (
    <ul className="list-group">{listContent()}</ul>
  );
};

export default SingleNews;
