import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/style/App.css';

import Header from './components/Header';
import SideBar from './components/SideBar/SideBar';
import NewsContainer from './modules/NewsContainer';
import useSingleNews from './modules/SingleNews.tsx/useSingleNews';

function App() {
  const { data } = useSingleNews();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container bg-white">
      <Header />
      <SideBar toggle={toggle} isOpen={isOpen} />
      <NewsContainer data={data && data} />
    </div>
  );
}

export default App;
