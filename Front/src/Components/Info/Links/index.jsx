import React, {useEffect, useState} from 'react';

import SrcGithub from '../../../Static/Img/Icons/Sidebar/GitHub.png';
import SrcStackOverflow from '../../../Static/Img/Icons/Sidebar/StackOverflow.png';
import Codewars from '../../../Static/Img/Icons/Sidebar/Codewars.png';
import SrcTelegram from '../../../Static/Img/Icons/Sidebar/Telegram.png';
import SrcVk from '../../../Static/Img/Icons/Sidebar/Vk.png';
import SrcInst from '../../../Static/Img/Icons/Sidebar/Inst.png';
import SrcYouTube from '../../../Static/Img/Icons/Sidebar/YouTube.png';

import s from './Style/Links.module.sass';

const items = [
  {href: 'https://t.me/sepezho_log', src: SrcTelegram, isActive: false},
  {href: 'https://www.instagram.com/sepezho', src: SrcInst, isActive: false},
  {href: 'https://vk.com/sepezho', src: SrcVk, isActive: false},
  {href: 'https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ', src: SrcYouTube, isActive: false},
  {href: 'https://github.com/SEPEZHO', src: SrcGithub, isActive: false},
  {href: 'https://stackoverflow.com/users/12073046/sepezho', src: SrcStackOverflow, isActive: false},
  {href: 'https://www.codewars.com/users/sepezho', src: Codewars, isActive: false},
];

const Links = () => {
  const [itemsState, setItemsState] = useState(items);

  useEffect(() => {
    let oldElement = 0;
    const interval = setInterval(() => {
      const newItems = [...items];
      newItems[oldElement].isActive = false;
      let newElement = Math.floor(Math.random() * items.length);
      while (oldElement === newElement) {
        newElement = Math.floor(Math.random() * items.length);
      }
      oldElement = newElement;
      newItems[newElement].isActive = true;
      setItemsState(newItems);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={s.LinksContainer}>
      {itemsState.map((item) => (
        <a href={item.href} key={item.href}>
          <img src={item.src} className={item.isActive ? s.activeImg : ''} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Links;
