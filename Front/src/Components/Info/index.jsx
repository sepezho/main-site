import React from 'react';

import Links from './Links/';
import Text from './Text/';
import Slider from './Slider/';
import useResponsive from '../../Logics/Responsive';

import s from './Style/Info.module.sass';

const Info = () => {
  const isMobile = useResponsive('(min-width: 1024px)', true)
 
  return (
    <div className={s.container}>
      <div className={s.Info}>
        <div className={s.CenterInfo}>
          {isMobile && <Links />}
          <Text />
          {!isMobile && <Links />}
          <Slider />
        </div>
      </div>

    </div>
  );
};

export default Info;
