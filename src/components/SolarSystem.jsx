import React from 'react';
import { useState, useContext } from 'react'
import PlanetContext from '../PlanetContext';

import PlanetPopup from './PlanetPopup'
import CanvasComp from "./CanvasComp"
 
function SolarSystemMap() {

   const [planetInfo, setPlanetInfo] = useState({
      name: undefined,
    })

    return (
      <PlanetContext.Provider value={{ planetInfo, setPlanetInfo}}>
         <PlanetPopup/>
         <CanvasComp />
      </PlanetContext.Provider>
       
    );
  }

  export default SolarSystemMap
  