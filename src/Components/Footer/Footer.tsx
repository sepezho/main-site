import React from 'react';

import SrcInst from 'src/Static/Img/Icons/Sidebar/Inst.png';
import s from './Style/Footer.module.sass';

const Footer: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div>
          <div>
            <img src={SrcInst} alt="" />
            <span>
              Все данные берутся с моего <a href="https://www.instagram.com/sepezho">instagram</a>, при загрузке страницы.
            </span>
          </div>
          <span>
            Если ты работадатель, или айтишник, то вот мой <a href="https://sepezho.com">сайт</a> со всеми моими работами.
          </span>
        </div>

        <span>
          Created by Sepezho 2020
        </span>
      </div>
    </div>
  );
};

export default Footer;
