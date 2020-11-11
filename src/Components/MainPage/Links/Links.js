import React, { useEffect, useState } from 'react';
import s from './Style/Links.module.sass';
import SrcGithub from "src/Static/Img/Icons/GitHub.png";
import SrcStackOverflow from "src/Static/Img/Icons/StackOverflow.png";
import Codewars from "src/Static/Img/Icons/Codewars.png";
import SrcTelegram from "src/Static/Img/Icons/Telegram.png";
import SrcVk from "src/Static/Img/Icons/Vk.png";
import SrcInst from "src/Static/Img/Icons/Inst.png";
import SrcYouTube from "src/Static/Img/Icons/YouTube.png";
const items = [
    { href: 'https://t.me/sepezho_log', src: SrcTelegram, isActive: false },
    { href: 'https://www.instagram.com/sepezho', src: SrcInst, isActive: false },
    { href: 'https://vk.com/sepezho', src: SrcVk, isActive: false },
    { href: 'https://www.youtube.com/channel/UC4nIyTlfA6DKuF_xKtefutQ', src: SrcYouTube, isActive: false },
    { href: 'https://github.com/SEPEZHO', src: SrcGithub, isActive: false },
    { href: 'https://stackoverflow.com/users/12073046/sepezho', src: SrcStackOverflow, isActive: false },
    { href: 'https://www.codewars.com/users/sepezho', src: Codewars, isActive: false },
];
const Links = React.memo(() => {
    const [itemsState, setItemsState] = useState(items);
    console.log('rerender');
    useEffect(() => {
        let oldElement = 0;
        let interval = setInterval(() => {
            const newItems = [...items];
            newItems[oldElement].isActive = false;
            oldElement = Math.floor(Math.random() * items.length);
            newItems[oldElement].isActive = true;
            setItemsState(newItems);
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, [items]);
    return (React.createElement("div", { className: s.LinksContainer }, itemsState.map((item) => (React.createElement("a", { href: item.href, key: item.href },
        React.createElement("img", { src: item.src, className: item.isActive ? s.activeImg : '', alt: "" }))))));
});
export default Links;
//# sourceMappingURL=Links.js.map