import React from 'react';

import { Provider } from 'react-redux';
import { store } from './Store/Store';

import './Style/App.sass';

import Header from './Components/Header/';
import Main from './Components/Main/';
import Footer from './Components/Footer/';

import GetInstData from './Logics/GetInstData';
import GetInstDataFunc from './Logics/GetViews';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />

      <GetInstData />
      <GetInstDataFunc />
    </Provider>
  );
}

export default App;
