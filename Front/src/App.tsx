import React from 'react';

import { Provider } from 'react-redux';
import { store } from './Store/Store';

import './Style/App.sass';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import GetInstData from 'src/Logics/GetInstData/GetInstData';
import GetInstDataFunc from 'src/Logics/GetViews/GetViews';


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
