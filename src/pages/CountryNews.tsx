import { Container } from "../components";
import { NewsCard, NewsListElement } from "../components/UI";

import "../styles/pages/country_news.scss";

export const CountryNews = () => {
  return (
    <Container>
      <div className="all-news">
        <NewsListElement />
        <NewsCard />
      </div>
    </Container>
  );
};
