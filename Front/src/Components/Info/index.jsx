import React from 'react';

import Links from './Links/';
import Text from './Text/';
import Slider from './Slider/';

import s from './Style/Info.module.sass';

const Info = () => {
  return (
    <div className={s.container}>
      <div className={s.Info}>
        <div className={s.CenterInfo}>
          <Links />
          <Text />
          <Slider />
        </div>
      </div>

    </div>
  );
};

export default Info;
