import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import Waiting from 'src/Static/Img/Icons/Slider/Waiting.svg';
import Heart from 'src/Static/Img/Icons/Slider/Heart.svg';
import Comments from 'src/Static/Img/Icons/Slider/Comments.svg';
import File from 'src/Static/Img/Icons/Slider/File.svg';
import Calendar from 'src/Static/Img/Icons/Slider/Calendar.svg';

import s from './Style/Slider.module.sass';

const SliderModule: React.FC = (props) => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const MapImgs = (props) => {
    if (props.imgs.edge_owner_to_timeline_media) {
      return (
        <Slider {...settings}>
          {props.imgs.edge_owner_to_timeline_media.edges.map((e) => e.node).slice(0, 10).map((img) => (
            <div key={img.id} className={s.Slide}>
              <img src={img.thumbnail_resources[4].src} className={s.Slider_img} alt="" />
              <div>
                <div>
                  <img src={Calendar} alt="" />
                  <span>
                    {/*SOME GENIUS CODE HERE :D*/}
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
                    {/*AND HERE*/}
                    {img.edge_media_to_caption.edges[0]?.node.text ? img.edge_media_to_caption.edges[0]?.node.text.length >= 70 ? `${img.edge_media_to_caption.edges[0]?.node.text.slice(0, 70)}...` : img.edge_media_to_caption.edges[0]?.node.text : 'Unfound note'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      );
    }
    return (
      <Slider {...settings} className={s.WaitingSlide}>
        <img src={Waiting} alt="" />
      </Slider>
    );
  };

  return (
    <div className={s.SliderContainerMain}>
      <div className={s.Title}>
        {props.imgs.username.toUpperCase()}
      </div>
      <div className={`${s.SliderContainer} rotateContainer`}>
        <div className={`${s.SliderContainerItem} rotateItem`}>
          <MapImgs imgs={props.imgs} />
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
    imgs: state.imgs.graphql.user,
  };
};

export default connect(UpdateImgsCatch)(SliderModule);
