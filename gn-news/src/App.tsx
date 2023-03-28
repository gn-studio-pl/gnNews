import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { SideMenu } from './components/SideMenu';
import { countries } from './constants/countries'

class App extends React.Component {
  render(){
    return (
      <div className='app-container'>
        <div className="app">    
          <Header/>
          <div className="grid-row">
            <SideMenu countries={countries}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
