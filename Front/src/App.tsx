import React from 'react';

import { Provider } from 'react-redux';
import { store } from './Store/Store';

import './Style/App.sass';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}
// https://api-metrika.yandex.net/analytics/v3/data/ga?end-date=today&ids=ga%3A74727217&metrics=ga%3Apageviews&start-date=2021-03-25
export default App;
