import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import useResponsive from '../../Logics/Responsive';
import { UpdateBubbleCard } from '../../Store/Actions/UpdateBubbleCard'

import s from './Style/BubbleCard.module.sass';

const BubbleCard = props => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
  };  

  if (props.bubbleCard.images) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "visible"
  }

  return props.bubbleCard.images ? (
    <div className={s.container} onClick={()=>props.UpdateBubbleCard({})}>
      <div className={s.cardContainer} onClick={e=>e.stopPropagation()}>
        <div className={s.card}>
          <div className={s.exit} onClick={()=>props.UpdateBubbleCard({})}>
            X
          </div>
          <div className={s.slider}>
            <Slider className={s.sliderContainer} {...settings}>
              {props.bubbleCard.images.map(e=><img src={e} href="#"/>)}
            </Slider>
          </div>

          <div className={s.textContainer}>
            <div className={s.textHeader}>
              <div className={s.title}>
                {props.bubbleCard.title}
              </div>

              <div className={s.date}>
                {props.bubbleCard.dateFrom} to {props.bubbleCard.dateTo}
              </div>
            </div>

            <div className={s.text}>
              {props.bubbleCard.text}
            </div>
            
            <div className={s.used}>
              Used: {props.bubbleCard.used}
            </div>
          </div>
        </div>
        <div className={s.links}>
          {props.bubbleCard.links}
        </div>
      </div>
    </div>
  ) : null
}

const UpdateCatch = (state) => {
  return {
    bubbleCard: state.bubbleCard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateBubbleCard: (bubbleCard) => dispatch(UpdateBubbleCard(bubbleCard)),
  };
};

export default connect(UpdateCatch, mapDispatchToProps)(BubbleCard);
