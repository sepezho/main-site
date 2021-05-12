import React from 'react';

import Links from './Links/';
import Text from './Text/';
import Slider from './Slider/';

import s from './Style/MainPage.module.sass';

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.mainPage}>
        <div className={s.CenterMain}>
          <Links />
          <Text />
          <Slider />
        </div>
      </div>

    </div>
  );
};

export default Main;
