import React, { useEffect, useState } from 'react';
import Tilt from '../../../../Logics/Tilt';
import useResponsive from '../../../../Logics/Responsive';

import s from './Style/Bubble.module.sass';

const Bubble = props => {
  const isMobile = useResponsive('(min-width: 1024px)', true)
  const shadowBubble = `8px 8px 16px ${props.isCommercial ? '#BAE5D6' : '#F8C9D5'}, inset -8px -8px 16px ${props.isCommercial ? '#BAE5D6' : '#F8C9D5'}`
  const shadowSmallBubble = `4px 4px 14px ${props.isCommercial ? '#BAE5D6' : '#F8C9D5'}, inset -4px -4px 14px ${props.isCommercial ? '#BAE5D6' : '#F8C9D5'}`
  const styles = {
    width: props.size,
    height: props.size,
    boxShadow: props.size > 100 ? shadowBubble : shadowSmallBubble,
    ...props.style
  }

  return (
    <div className={s.container} style={styles}>
    {
      props.cover && (
        isMobile ?
          <Tilt children={
            <img src={props.cover} className={s.cover} alt='#'/>
          } />
        :
          <img src={props.cover} className={s.cover} alt='#'/>
      )
    }
    </div>
  )
}

export default Bubble;
