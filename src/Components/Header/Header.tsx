import React from 'react'
import { Link } from 'react-router-dom'

import s from './Style/Header.module.sass'

const Header: React.FC = () => {
  return (
    <Link to='/'>
      <div className={`${s.root} rotateContainer`}>
        <div className={`${s.container} rotateItem`}>
          <span className={s.title}>SEPEZHO</span>
          <span className={s.subTitle}>Vladislav Bliznyuk</span>
        </div>
      </div>
    </Link>
  );
}

export default Header
