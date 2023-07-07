import React from 'react';
import CanvasComp from "./CanvasComp"
import Transition from './Transition';
function SolarSystemMap() {
    return (
      <div>
         <Transition>
        <CanvasComp />
        </Transition>
      </div>
    );
  }

  export default SolarSystemMap
  