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
import { NewsPopup } from './components/NewsPopup';


class App extends React.Component<any, {news: INews[],  problemPopup: boolean, newsPopup: boolean, popupNews: {title: string, sourceName: string, publishedAt: string, url: string, author: string} | null}> {

  constructor(props: any){
    super(props);
    this.state = { news: [], problemPopup: false, newsPopup: false, popupNews: {title: "", sourceName: "", publishedAt: "", url: "", author: ""}}
    this.getNews = this.getNews.bind(this);
    this.openProblemPopup = this.openProblemPopup.bind(this);
    this.closeProblemPopup =  this.closeProblemPopup.bind(this);
    this.openNewsPopup = this.openNewsPopup.bind(this);
    this.closeNewsPopup = this.closeNewsPopup.bind(this);
    this.setPopupNews = this.setPopupNews.bind(this);
  }

  componentDidMount(): void {
    this.getNews('pl');
  }

  async getNews(country: string) {
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

  openNewsPopup(){
    this.setState({newsPopup: true});
  }

  closeNewsPopup(){
    this.setState({newsPopup: false});
  }

  setPopupNews(title: string, sourceName: string, url: string, publishedAt: string, author: string){
    this.setState({popupNews: {
      title: title,
      sourceName: sourceName,
      url: url,
      publishedAt: publishedAt,
      author: author
    }
    })
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
                <Route path="*" element={<ContentArea news={this.state.news} setPopupNews={this.setPopupNews} openNewsPopup={this.openNewsPopup}/>}/>
              </Routes>
            </div>
            <Footer numberOfNews={this.state.news.length}/>
            <ProblemPopup trigger={this.state.problemPopup} close={this.closeProblemPopup}/>
            <NewsPopup trigger={this.state.newsPopup} close={this.closeNewsPopup} title={this.state.popupNews!.title} sourceName={this.state.popupNews!.sourceName} author={this.state.popupNews!.author} url={this.state.popupNews!.url} publishedAt={this.state.popupNews!.publishedAt}/>
          </div>
        </div> 
      </BrowserRouter> 
    );
  }
}

export default App;
