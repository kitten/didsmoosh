import React, { useState } from 'react';
import { SmooshContent } from './Smoosh';
import { container, wrapper, outer, inner, content } from './layout.css';

const SmooshLayout = (porps) => {
  const [stuff, doStuff] = useState('');
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={outer}>
          <div className={inner}>
            <div className={layout}>
              <div className={content}>
                <SmooshContent 
                  things={stuff} 
                  doThingsToStuff={thing => doStuff(thing)} 
                  {...porps} 
                 />
              </div>
             </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
