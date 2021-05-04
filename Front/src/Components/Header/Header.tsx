import React from 'react';

import {connect} from 'react-redux';
import RenderImg from 'src/Components/RenderImg';
import Waiting from 'src/Static/Img/Icons/Slider/Waiting.svg';
import s from './Style/Header.module.sass';

const Header: React.FC = (props) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className="rotateContainer">
          {
            props.profile_pic_url ?
              <div className={s.avatar}>
                <RenderImg url={props.profile_pic_url} />
              </div>
            :
              <img src={Waiting} className={s.waiting} alt="" />
          }
        </div>
        <p>
          <span className={s.title}>{props.full_name}</span>
          <span className={s.subTitle}>{props.biography.split(`\n`)[0].slice(0, 25)}</span>
        </p>
      </div>
    </div>
  );
};

const UpdateCatch = (state) => {
  return {
    biography: state.instData.biography,
    profile_pic_url: state.instData.profile_pic_url,
    full_name: state.instData.full_name,
  };
};

export default connect(UpdateCatch)(Header);
