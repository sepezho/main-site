import React from 'react';
import Tilt from '../../../../Logics/Tilt';
import useResponsive from '../../../../Logics/Responsive';

import s from './Style/Bubble.module.sass';

const Bubble = props => {
  const styles = {
    width: props.size,
    height: props.size,
    boxShadow: `8px 8px 16px ${props.isCommercial ? '#BAE5D6' : '#F8C9D5'}, inset -8px -8px 16px ${props.isCommercial ? '#BAE5D6' : '#F8C9D5'}`,

    ...props.style
  }
  
  return (
    <div className={s.container} style={styles}>
      {
        useResponsive('(min-width: 950px)', true) ?
          <Tilt children={
            <img src={props.cover} className={s.cover} alt='#'/>
          } />
        :
          <img src={props.cover} className={s.cover} alt='#'/>
      }
    </div>
  )
}

export default Bubble;
