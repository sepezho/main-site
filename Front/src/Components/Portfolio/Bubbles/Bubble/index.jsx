import React from 'react';
import { connect } from 'react-redux';
import Tilt from '../../../../Logics/Tilt';
import useResponsive from '../../../../Logics/Responsive';
import { UpdateBubbleCard } from '../../../../Store/Actions/UpdateBubbleCard'

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
    <div className={s.container} key={props.key} style={styles}>
    {
      props.cover && (
        isMobile ?
          <Tilt children={
            <img
              src={props.cover}
              className={s.cover}
              alt='#'
              onClick={()=>props.UpdateBubbleCard(props.cardData)}
            />
          } />
        :
          <img
            src={props.cover}
            className={s.cover}
            alt='#'
            onClick={()=>props.UpdateBubbleCard(props.cardData)}
          />
      )
    }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateBubbleCard: (bubbleCard) => dispatch(UpdateBubbleCard(bubbleCard)),
  };
};

export default connect(null, mapDispatchToProps)(Bubble);