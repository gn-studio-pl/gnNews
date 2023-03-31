import { useState } from 'react';
import { Article, useGetArticlesQuery } from '../../redux/apiSlices/article';
import { useAppSelector } from '../../redux/store';
import { useCountryCode } from '../../hooks/useCountryCode';
import { useModal } from '../../hooks/useModal';

export const useCountry = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article>();
  const newsModal = useModal();

  const { code } = useCountryCode();
  const { data } = useGetArticlesQuery({ code });
  const articles = data?.articles;
  const view = useAppSelector().view.view;

  const handleOpenModal = (title: string) => {
    setSelectedArticle(articles?.find((item) => item.title === title));
    newsModal.handleOpen();
  };

  return { articles, handleOpenModal, newsModal, selectedArticle, view };
};
