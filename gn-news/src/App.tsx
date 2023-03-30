import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { SideMenu } from './components/SideMenu';
import { countries } from './constants/countries'
import { ContentArea } from './components/ContentArea';
import { api } from './common/api'
import { formatDate } from './common/date';
import { INews } from './models/INews'

class App extends React.Component <any, {news: INews[], numberOfNews: number, loading: boolean}>{

  constructor(props: any){
    super(props);
    this.state = {news: [], numberOfNews: 0, loading: true}
  }

  componentDidMount() {
    this.getNews();
  }

  async getNews(country?: string){
    try{
      let response = await api.getNews(country)
      let news: INews[] = response.articles.map((article) => ({
        title: article.title,
        sourceName: article.source.name,
        sourceUrl: article.url,
        author: article.author,
        publishedAt: formatDate(article.publishedAt),
        description: article.description,
        thumbnailUrl: article.urlToImage
      }))
      this.setState({news: news, numberOfNews: response.totalResults, loading: false})
    } catch {
      
    }
  }

  render(){
    return (
      <div className='app-container'>
        <div className="app">    
          <Header/>
          <div className="grid-row">
            <SideMenu countries={countries} getNews={this.getNews}/>
            <ContentArea news={this.state.news}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
