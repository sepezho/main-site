import React, { useEffect, useState } from 'react';
import Bubble from './Bubble';
import useResponsive from '../../../Logics/Responsive';
import {
  bubbles,
  compressedBubbles,
  mobileBubbles,
  smallBubbles,
  compressedSmallBubbles,
  smallMobileBubbles,
  bubblesLegend,
  mobileBubblesLegend
} from './bubblesData';

import s from './Style/Bubbles.module.sass';

const Bubbles = () => {
  const isMobile = useResponsive('(min-width: 1024px)', true)
  const [bubblesData, updateBubblesData] = useState([...compressedBubbles, ...compressedSmallBubbles])
  
  useEffect(()=>updateBubblesData(
    !isMobile ?
      [...mobileBubbles, ...smallMobileBubbles]
    :
      [...compressedBubbles, ...compressedSmallBubbles]
  ), [isMobile])

  return (
    <div
      className={s.container}
      onMouseEnter={()=> isMobile && updateBubblesData([...bubbles, ...smallBubbles])}
      onMouseLeave={()=> isMobile && updateBubblesData([...compressedBubbles, ...compressedSmallBubbles])}
    >
      <div className={s.bubblesContainer}>
        {bubblesData.map(e=>
          <Bubble {...e} />
        )}

        <div className={s.workedOn}>
          <div className={s.bubblesLegend}>
            {(isMobile ? bubblesLegend : mobileBubblesLegend).slice(0, 2).map(e=>
              <Bubble {...e} />
            )}
          </div>
          <span>
            Коммерция
          </span>
        </div>

        <div className={s.myWorks}>
          <div className={s.bubblesLegend}>
            {(isMobile ? bubblesLegend : mobileBubblesLegend).slice(2).map(e=>
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