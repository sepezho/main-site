import React, { useEffect, useRef, useState } from 'react';
import Bubble from './Bubble';

import PumpyFarmCover from '../../../Static/Img/Portfolio/PumpyFarmCover.png';
import s from './Style/Bubbles.module.sass';

const compressedBubles = [
  {key: 0, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '0 300px 0 0'}},
  {key: 1, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '80px 0 0 300px'}},
  {key: 2, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '300px 140px 0 0'}},
  {key: 3, cover: PumpyFarmCover, isCommercial: true, size: 200, style: {margin: '387.5px 0 0 375px'}},
  {key: 4, cover: PumpyFarmCover, isCommercial: true, size: 150, style: {margin: '560px 0 0 150px'}},
  {key: 5, cover: PumpyFarmCover, isCommercial: false, size: 190, style: {margin: '590px 0 0 495px'}},
  {key: 6, cover: PumpyFarmCover, isCommercial: false, size: 150, style: {margin: '611px 157px 0 0'}},
  {key: 7, cover: PumpyFarmCover, isCommercial: false, size: 200, style: {margin: '534px 512px 0 0'}},
  {key: 8, cover: PumpyFarmCover, isCommercial: false, size: 300, style: {margin: '720px 0 0 140px'}},
  {key: 9, cover: PumpyFarmCover, isCommercial: false, size: 200, style: {margin: '735px 378px 0 0'}},
  {key: 10, cover: PumpyFarmCover, isCommercial: false, size: 300, style: {margin: '942px 294px 0 0'}},
]

const bubles = [
  {key: 0, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '0 315px 0 0'}},
  {key: 1, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '95px 0 0 315px'}},
  {key: 2, cover: PumpyFarmCover, isCommercial: true, size: 300, style: {margin: '320px 160px 0 0'}},
  {key: 3, cover: PumpyFarmCover, isCommercial: true, size: 200, style: {margin: '410px 0 0 400px'}},
  {key: 4, cover: PumpyFarmCover, isCommercial: true, size: 150, style: {margin: '600px 0 0 150px'}},
  {key: 5, cover: PumpyFarmCover, isCommercial: false, size: 190, style: {margin: '630px 0 0 550px'}},
  {key: 6, cover: PumpyFarmCover, isCommercial: false, size: 150, style: {margin: '650px 170px 0 0'}},
  {key: 7, cover: PumpyFarmCover, isCommercial: false, size: 200, style: {margin: '600px 540px 0 0'}},
  {key: 8, cover: PumpyFarmCover, isCommercial: false, size: 300, style: {margin: '780px 0 0 190px'}},
  {key: 9, cover: PumpyFarmCover, isCommercial: false, size: 200, style: {margin: '800px 350px 0 0'}},
  {key: 10, cover: PumpyFarmCover, isCommercial: false, size: 300, style: {margin: '1020px 250px 0 0'}},
]


const Bubbles = () => {
  const [bubblesData, updateBubblesData] = useState(compressedBubles)
  
  setTimeout(()=>{
    updateBubblesData(bubles)
  }, 1000)

  // if document.documentElement.scrollTop

  return (
    <div className={s.container}>
      <div className={s.bubblesContainer}>
        {bubblesData.map(e=>
          <Bubble
            {...e}
          />
        )}
      </div>
      <div className={s.title}>
        PROJECTS
      </div>
    </div>
  );
}

export default Bubbles;
