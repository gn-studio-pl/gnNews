import axios from "axios";

const searchNews = async(country) => {
    // const API_KEY = 'b65ff571e99e4b2597867596ee40794d';
    const API_KEY = '0319a6c154eb4e03931545ab54e1182a';
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}`, {
        headers: {
            Authorization: API_KEY
        }
    })
    return response.data.articles
}

export default searchNews;


