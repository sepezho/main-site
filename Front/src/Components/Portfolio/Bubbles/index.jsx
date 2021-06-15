import React, { useEffect, useState } from 'react';
import Bubble from './Bubble';
import useResponsive from '../../../Logics/Responsive';
import {
  bubbles,
  compressedBubbles,
  laptopBubbles,
  mobileBubbles,
  smallBubbles,
  compressedSmallBubbles,
  smallLaptopBubbles,
  smallMobileBubbles,
  bubblesLegend,
  mobileBubblesLegend
} from './bubblesData/';

import s from './Style/Bubbles.module.sass';

const Bubbles = props => {
  const isLaptop = useResponsive('(min-width: 1024px)', true)
  const isMobile = useResponsive('(min-width: 450px)', true)
  const [bubblesData, updateBubblesData] = useState([...compressedBubbles, ...compressedSmallBubbles])
  
  useEffect(()=>updateBubblesData(
    !isLaptop ?
      !isMobile ?
        [...mobileBubbles, ...smallMobileBubbles]
      :
        [...laptopBubbles, ...smallLaptopBubbles]
    :
      [...compressedBubbles, ...compressedSmallBubbles]
  ), [isLaptop, isMobile])

  return (
    <div
      className={s.container}
      // onMouseEnter={()=> isMobile && updateBubblesData([...bubbles, ...smallBubbles])}
      // onMouseLeave={()=> isMobile && updateBubblesData([...compressedBubbles, ...compressedSmallBubbles])}
    >
      <div className={s.bubblesContainer}>
        <div className={s.workedOn}>
          <div className={s.bubblesLegend}>
            {(isLaptop ? bubblesLegend : mobileBubblesLegend).slice(0, 2).map(e=>
              <Bubble {...e} />
            )}
          </div>
          <span>
            Коммерция
          </span>
        </div>

        {bubblesData.map(e=>
          <Bubble {...e} setBubbleCardOpen={props.setBubbleCardOpen} />
        )}

        <div className={s.myWorks}>
          <div className={s.bubblesLegend}>
            {(isLaptop ? bubblesLegend : mobileBubblesLegend).slice(2).map(e=>
              <Bubble {...e} />
            )}
          </div>
          <span>
            Pet-проекты
          </span>
        </div>
      </div>
      
      <div className={s.title}>
        PROJECTS
      </div>
    </div>
  );
}

export default Bubbles;