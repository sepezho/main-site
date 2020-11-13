import React, {Component, useEffect} from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import jpeg from 'src/Static/Img/1.jpg';
import s from './Style/Slider.module.sass';

import Waiting from 'src/Static/Img/Icons/Slider/Waiting.svg';
import Heart from 'src/Static/Img/Icons/Slider/Heart.svg';
import Comments from 'src/Static/Img/Icons/Slider/Comments.svg';
import File from 'src/Static/Img/Icons/Slider/File.svg';
import Calendar from 'src/Static/Img/Icons/Slider/Calendar.svg';

import s from './Style/Links.module.sass';

// const items = [
//   {href: 'https://t.me/sepezho_log', src: SrcTelegram, isActive: false},
// ];

// import Card from './Paralax_module.js';

const SliderModule: React.FC = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 1000, //1000
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, //5000
  };

  const MapImgs = (props) => {
    if (props.imgs.graphql) {
      return (
        <Slider {...settings}>
          {props.imgs.graphql?.user.edge_owner_to_timeline_media.edges.map(e => e.node).map(img => (
            <div key={img.id} className={s.Slide}>
              <img src={img.thumbnail_resources[4].src} className={s.Slider_img} alt="" />
              <div>
                <div>
                  <img src={Calendar} alt="" />
                  <span>
                    {(img.accessibility_caption?.split('. ')[0].split(/([A-Z])/).reverse()[1] + img.accessibility_caption?.split('. ')[0].split(/[A-Z]/).reverse()[0]) ? img.accessibility_caption?.split('. ')[0].split(/([A-Z])/).reverse()[1] + img.accessibility_caption?.split('. ')[0].split(/[A-Z]/).reverse()[0] : 'Unfound date'}
                  </span>
                </div>
                <div>
                  <img src={Heart} alt="" />
                  <span>
                    {img.edge_liked_by.count}
                  </span>
                </div>
                <div>
                  <img src={Comments} alt="" />
                  <span>
                    {img.edge_media_to_comment.count}
                  </span>
                </div>
                <div className={s.SliderNote}>
                  <img src={File} alt="" />
                  <span>
                    {img.edge_media_to_caption.edges[0]?.node.text ? img.edge_media_to_caption.edges[0]?.node.text.length >= 70 ? img.edge_media_to_caption.edges[0]?.node.text.slice(0, 70) + '...' : img.edge_media_to_caption.edges[0]?.node.text : 'Unfound note'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )
    } else {
      return (
        <Slider {...settings} className={s.WaitingSlide}>
          <img src={Waiting} alt="" />
        </Slider>
      )
    }
  }
// if (img) {
  //   return
  // }
  return (
    <div className={s.SliderContainerMain}>
      <div className={s.Title}>
      VLADISLAV
      </div>
      <div className={`${s.SliderContainer} rotateContainer`}>
        <div className={`${s.SliderContainerItem} rotateItem`}>
          <MapImgs imgs = {props.imgs} />
        </div>
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
    </div>
  );
};

const UpdateImgsCatch = (state) => {
  return {
    imgs: state.imgs,
  };
};

export default connect(UpdateImgsCatch)(SliderModule);
//id
//display_url
//is_video
//edge_media_to_comment.count
//edge_liked_by.count
//thumbnail_resources[4].src
//edge_media_to_caption.edges[0].node.text

              //.map(e => !e.node.is_video ? e.node : null)
              // imgs = props.imgs.graphql?.user.edge_owner_to_timeline_media.edges.map(e => !e.node.is_video ? e.node : null)
              // console.log('-----------------------');
              //
              // console.log(img.id);
              // console.log(img.is_video);
              // console.log(img.edge_media_to_comment.count);
              // console.log(img.edge_liked_by.count);
              // console.log(img.thumbnail_resources[4].src);
              // console.log(img.edge_media_to_caption.edges[0]?.node.text ? img.edge_media_to_caption.edges[0]?.node.text.length >= 100 ? img.edge_media_to_caption.edges[0]?.node.text.slice(0,100) + '...' : img.edge_media_to_caption.edges[0]?.node.text : 'NETU');
              //
              // console.log('-----------------------');
