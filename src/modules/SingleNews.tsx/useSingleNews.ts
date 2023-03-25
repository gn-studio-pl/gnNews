import axios from 'axios';
import { useEffect, useState } from 'react';

//change to env
const apiKey = '971cb193de6540929fa8ae9e5b8a14fb';
//'b4c8oWFGxL7Dq27j45RTHYK5qg_s2-n7aPKYxxkc85g';
//http://localhost:8080/data/data.json
//https://newsapi.org/v2/top-headlines?country=pl&apiKey=${apiKey}
const useSingleNews = () => {
  const [data, setData] = useState<[]>();
  const getNewsData = async () => {
    try {
      let res = await axios({ method: 'GET', url: `http://localhost:8080/data/data.json` });
      setData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNewsData();
  }, []);
  return { data };
};

export default useSingleNews;
