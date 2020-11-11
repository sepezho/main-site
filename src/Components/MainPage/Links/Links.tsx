import React from 'react';

import s from './Style/Links.module.sass';

import inst from 'src/Static/Img/Icons/Inst.png';
import vk from 'src/Static/Img/Icons/Vk.png';

function Links() {
  return (
    <div className={s.LinksContainer}>
      <a href='https://vk.com/tasamayayanka'>
        <img src={vk} className={s.LinksImg} alt='' />
      </a>
      <a href='https://www.instagram.com/trynova.ya/'>
        <img src={inst} className={s.LinksImg} alt='' />
      </a>
    </div>
  );
}

export default Links;
