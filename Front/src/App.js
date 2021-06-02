import React from 'react';

import { Provider } from 'react-redux';
import { store } from './Store/Store';

import GetInstData from './Logics/GetInstData';
import GetGitData from './Logics/GetGitData';
import GetViewsData from './Logics/GetViewsData';

import Header from './Components/Header/';
import Info from './Components/Info/';
import Portfolio from './Components/Portfolio/';
import Footer from './Components/Footer/';

import './Style/App.sass';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Info />
      <Portfolio />
      <Footer />

      <GetInstData />
      <GetGitData />
      <GetViewsData />
      
      {/* FOR SLIDER */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Provider>
  );
}

export default App;
