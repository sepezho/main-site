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
  // let newArr = []
  const renderSlide = instPost => {
    // let newData = {}
    // newData.id = instPost.id
    // newData.img = instPost.thumbnail_resources[2].src
    // newData.date = instPost.accessibility_caption
    // newData.likedCount = instPost.edge_liked_by.count
    // newData.commentCount = instPost.edge_media_to_comment.count
    // newData.text = instPost.edge_media_to_caption.edges[0]?.node.text
    // newArr.push(newData)
    // console.log(JSON.stringify(newArr))
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
    if (props.instData.edge_owner_to_timeline_media?.edges[0]) {
      return (
        <Slider className={s.Slider} {...settings}>
          {props.instData.edge_owner_to_timeline_media.edges.filter(e => !e.node.is_video).map((e) => e.node).slice(0, 11).map(e => renderSlide(e))}
        </Slider>
      );
    }
    return (
      <Slider {...settings} className={`${s.WaitingSlide} ${s.Slider}`}>
        <img src={Waiting} alt="" />
      </Slider>
    );
  };
  return (
    <div className={s.SliderContainerMain}>
      <span className={s.Title}>
        ABOUT ME 
      </span>
      <div className={s.SliderContainer}>
        {
          useResponsive('(min-width: 1024px)', true) ?
            <Tilt children={<FilledSlider className={s.SliderContainerItem} instData={props.instData} />} />
          :
            <FilledSlider className={s.SliderContainerItem} instData={props.instData} />
        }
      </div>
    </div>
  );
};

const GetInstDataCatch = (state) => {
  return {
    instData: state.instData,
  };
};

export default connect(GetInstDataCatch)(SliderModule);