import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { SideMenu } from './components/SideMenu';
import { countries } from './constants/countries'
import ContentArea  from './components/ContentArea';
import { api } from './common/api';
import { formatDate } from './common/date';
import { INews } from './models/INews';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Footer } from './components/Footer';


class App extends React.Component<any, {news: INews[], loading: boolean}> {

  constructor(props: any){
    super(props);
    this.state = { news: [], loading: true}
    this.getNews = this.getNews.bind(this);
  }

  componentDidMount(): void {
    this.getNews('pl');
  }

  async getNews(country: string) {
    console.log('get news executing');
    try {
      let response = await api.getNews(country);
      let news: INews[] = response.articles.map((article) => ({
        title: article.title,
        sourceName: article.source.name,
        sourceUrl: article.url,
        author: article.author,
        publishedAt: formatDate(article.publishedAt),
        description: article.description,
        thumbnailUrl: article.urlToImage
      }));
      this.setState({news: news, loading: false});
      console.log(this.state.news);
    } catch (err){
      console.log(err);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div className='app-container'>
          <div className="app">    
            <Header navigateHome={() => this.getNews('pl')}/>
            <div className="app-middle-container">
              <SideMenu countries={countries} getNews={this.getNews}/>
              <Routes>
                <Route path="*" element={<ContentArea news={this.state.news}/>}/>
              </Routes>
            </div>
            <Footer numberOfNews={this.state.news.length}/>
          </div>
        </div> 
      </BrowserRouter> 
    );
  }
}

export default App;
