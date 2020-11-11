import React from 'react';
import { Link } from 'react-router-dom';
import s from './Style/Header.module.sass';
const Header = () => {
    return (React.createElement(Link, { to: '/' },
        React.createElement("div", { className: `${s.root} rotateContainer` },
            React.createElement("div", { className: `${s.container} rotateItem` },
                React.createElement("span", { className: s.title }, "SEPEZHO"),
                React.createElement("span", { className: s.subTitle }, "Vladislav Bliznyuk")))));
};
export default Header;
//# sourceMappingURL=Header.js.map