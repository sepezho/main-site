import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Tilt from '../../../Logics/Tilt';
import RenderImg from '../../../Logics/RenderImg';

import Waiting from '../../../Static/Img/Icons/Slider/Waiting.svg';
import Heart from '../../../Static/Img/Icons/Slider/Heart.svg';
import Comments from '../../../Static/Img/Icons/Slider/Comments.svg';
import File from '../../../Static/Img/Icons/Slider/File.svg';
import Calendar from '../../../Static/Img/Icons/Slider/Calendar.svg';
import useResponsive from '../../../Logics/Responsive';

import s from './Style/Slider.module.sass';

const SliderModule = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };  
  
  const renderSlide = instPost => {
    return(
        <div key={instPost.id} className={s.Slide}>
          <RenderImg url={instPost.thumbnail_resources[2].src} />
          <div>
            <div>
              <img src={Calendar} alt="" />
              <span>
                {instPost.accessibility_caption.split('.')[0].split('tagging')[0].split('on')[1]}
              </span>
            </div>
            <div>
              <img src={Heart} alt="" />
              <span>
                {instPost.edge_liked_by.count}
              </span>
            </div>
            <div>
              <img src={Comments} alt="" />
              <span>
                {instPost.edge_media_to_comment.count}
              </span>
            </div>
            <div className={s.SliderNote}>
              <img src={File} alt="" />
              <span>
                {
                  instPost.edge_media_to_caption.edges[0]?.node.text ?
                    instPost.edge_media_to_caption.edges[0]?.node.text.length >= 70 ?
                      instPost.edge_media_to_caption.edges[0]?.node.text.split(`\n`)[0].slice(0, 70) + '...'
                    :
                      instPost.edge_media_to_caption.edges[0]?.node.text.split(`\n`)[0]
                  :
                    'Unfound note'
                }
              </span>
            </div>
          </div>
        </div>
    )
  }
  
  const FilledSlider = (props) => {
    console.log(props)
    if (props.instData.edge_owner_to_timeline_media?.edges[0]) {
      return (
        <Slider className={s.SliderContainer} {...settings}>
          {props.instData.edge_owner_to_timeline_media.edges.filter(e => !e.node.is_video).map((e) => e.node).slice(0, 10).map(e => renderSlide(e))}
        </Slider>
      );
    }
    return (
      <Slider {...settings} className={`${s.WaitingSlide} ${s.SliderContainer}`}>
        <img src={Waiting} alt="" />
      </Slider>
    );
  };
  // {props.instData.username.toUpperCase()}

  return (
    <div className={s.SliderContainerMain}>
      <span className={s.Title}>
        ABOUTME 
      </span>
      {
        useResponsive('(min-width: 1024px)', true) ?
          <Tilt children={<FilledSlider className={s.SliderContainerItem} instData={props.instData} />} />
        :
          <FilledSlider className={s.SliderContainerItem} instData={props.instData} />
      }
      <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
    </div>
  );
};

const GetInstDataCatch = (state) => {
  return {
    instData: state.instData,
  };
};

export default connect(GetInstDataCatch)(SliderModule);