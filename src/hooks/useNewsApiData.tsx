import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetAllNewsQuery, useGetCountryNewsQuery } from 'store/newsApi';
import { RootState } from 'store/store';
import { News } from 'models/news';
import { ALL_COUNTRIES } from 'constants/index';

export const useNewsApiData = () => {
  const [data, setData] = useState<News[] | undefined>([]);
  const selectedCountry = useSelector((state: RootState) => state.countrySelector.key);
  const { data: allNews } = useGetAllNewsQuery();
  const { data: countryNews } = useGetCountryNewsQuery(selectedCountry);

  useEffect(() => {
    if (allNews && countryNews) {
      const selectedData = selectedCountry === ALL_COUNTRIES ? allNews?.articles : countryNews?.articles;
      setData(selectedData);
    }
  }, [allNews, countryNews, selectedCountry]);

  return data;
};
