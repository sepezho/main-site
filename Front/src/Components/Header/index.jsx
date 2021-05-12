import React from 'react';

import {connect} from 'react-redux';
import RenderImg from '../../Logics/RenderImg';
import Waiting from '../../Static/Img/Icons/Slider/Waiting.svg';
import EyeIco from '../../Static/Img/Icons/eyeIco.svg';

import s from './Style/Header.module.sass';

const Header = (props) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        {
          props.profile_pic_url ?
            <div className={s.avatar}>
              <RenderImg url={props.profile_pic_url} />
            </div>
          :
            <img src={Waiting} className={s.waiting} alt="" />
        }
        <p>
          <span className={s.title}>{props.full_name}</span>
          <span className={s.subTitle}>{props.biography.split(`\n`)[0].slice(0, 25)}</span>
        </p>
      </div>

      <div className={s.viewsContainer}>
        {
          props.views === 'loading...' ?
            <img src={Waiting} className={s.waiting} alt="" />
          :
            <img src={EyeIco} alt="" />
        }
        <span className={s.subTitle}>{props.views}</span>
      </div>

    </div>
  );
};

const UpdateCatch = (state) => {
  return {
    biography: state.instData.biography,
    profile_pic_url: state.instData.profile_pic_url,
    full_name: state.instData.full_name,
    views: state.views,
  };
};

export default connect(UpdateCatch)(Header);
