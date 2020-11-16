import React from 'react';

import UpdateImgs from 'src/Logics/UpdateImgs/UpdateImgs';
import Links from './Links/Links';
import Text from './Text/Text';
import Slider from './Slider/Slider';

import s from './Style/MainPage.module.sass';

const MainPage: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.mainPage}>
        <div className={s.CenterMain}>
          <Links />
          <Text />
          <Slider />
        </div>
      </div>
      <UpdateImgs />
    </div>
  );
};

export default MainPage;
