import React from 'react';
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
import { ProblemPopup } from './components/ProblemPopup'


class App extends React.Component<any, {news: INews[],  problemPopup: boolean}> {

  constructor(props: any){
    super(props);
    this.state = { news: [], problemPopup: false}
    this.getNews = this.getNews.bind(this);
    this.openProblemPopup = this.openProblemPopup.bind(this);
    this.closeProblemPopup =  this.closeProblemPopup.bind(this);
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
      this.setState({news: news});
      console.log(this.state.news);
    } catch (err){
      console.log(err);
    }
  }

  openProblemPopup(){
    this.setState({problemPopup: true})
  }

  closeProblemPopup() {
    this.setState({problemPopup: false});
  }

  render(){
    return (
      <BrowserRouter>
        <div className='app-container'>
          <div className="app">    
            <Header navigateHome={() => this.getNews('pl')} openProblemPopup={this.openProblemPopup}/>
            <div className="app-middle-container">
              <SideMenu countries={countries} getNews={this.getNews}/>
              <Routes>
                <Route path="*" element={<ContentArea news={this.state.news}/>}/>
              </Routes>
            </div>
            <Footer numberOfNews={this.state.news.length}/>
            <ProblemPopup trigger={this.state.problemPopup} close={this.closeProblemPopup}/>
          </div>
        </div> 
      </BrowserRouter> 
    );
  }
}

export default App;
