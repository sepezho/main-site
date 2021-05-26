import React, { useState } from 'react';
import Bubble from './Bubble';
import useResponsive from '../../../Logics/Responsive';
import {bubbles, compressedBubbles, bubblesLegend} from './bubblesData';

import s from './Style/Bubbles.module.sass';

const Bubbles = () => {
  const [bubblesData, updateBubblesData] = useState(compressedBubbles)
  const isMobile = useResponsive('(min-width: 1024px)', true)

  return (
    <div
      className={s.container}
      onMouseEnter={()=> isMobile && updateBubblesData(bubbles)}
      onMouseLeave={()=> isMobile && updateBubblesData(compressedBubbles)}
    >
      <div className={s.bubblesContainer}>
        {bubblesData.map(e=>
          <Bubble {...e} />
        )}

        <div className={s.legend}>
          <div className={s.bubblesLegend}>
            {bubblesLegend.map(e=>
              <Bubble {...e} />
            )}
          </div>
          <div className={s.workedOn}>
            <span>
              Коммерция
            </span>
          </div>
          <div className={s.myWorks}>
            <span>
              Pet-проекты
            </span>
          </div>
        </div>
      </div>

      <div className={s.title}>
        PROJECTS
      </div>
    </div>
  );
}

export default Bubbles;