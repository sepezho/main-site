import React from 'react';

import s from './Style/Bubble.module.sass';

const Bubble = props => {
  const styles = {
    width: props.size,
    height: props.size,
    border: `6px solid ${props.isCommercial ? '#BCD0E3' : '#BAE5D6'}`,

    ...props.style
  }
  return (
    <div className={s.container} style={styles}>
      <img src={props.cover} className={s.cover} alt='#'/>
    </div> 
  );
}

export default Bubble;
