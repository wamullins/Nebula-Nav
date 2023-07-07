// https://www.copycat.dev/blog/react-three-fiber/

// https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures -- cite to show how to load textures

import "../App.css";
import { Canvas } from "@react-three/fiber";
// import { useTexture } from "@react-three/drei" // apparently i can use this to set up multiple cameras. react three fiber takes care of default camera set up
import SphereComp from "./SphereComp";


import sunTexture from '../assets/sun.jpeg';
import mercuryTexture from '../assets/mercury.png';
import venusTexture from '../assets/venus.jpeg';
import earthTexture from '../assets/earth.jpeg';
import marsTexture from '../assets/mars.jpeg'
import jupiterTexture from '../assets/jupiter.jpeg'
import saturnTexture from '../assets/Saturn.jpeg'
import uranusTexture from '../assets/uranus.jpeg'
import neptuneTexture from '../assets/neptune.jpeg'
import plutoTexture from '../assets/pluto.jpeg'
 
function CanvasComp() {

    const planetData = [
        {
            name: "Sun",
            color: 'yellow',
            texture: sunTexture,
            position: [ 0, 0, 0 ],
            radius: 48,
            rotationSpeed: 0
        },
        {
            name: "Mercury",
            color: 'burlywood',
            texture: mercuryTexture,
            position: [ 30, 0, 0 ],
            radius: 20,
            rotationSpeed: 0.009
        },
        {
            name: "Venus",
            color: 'brown',
            texture: venusTexture,
            position: [ 50, 0, 0 ],
            radius: 24,
            rotationSpeed: 0.008
        },
        {
            name: "Earth",
            color: 'blue',
            texture: earthTexture,
            position: [ -120, 0, 0 ],
            radius: 28,
            rotationSpeed: 0.007
        },
        {
            name: "Mars",
            color: 'red',
            texture: marsTexture,
            position: [ -40, 0, 0 ],
            radius: 28,
            rotationSpeed: 0.006
        },
        {
            name: "Jupiter",
            color: 'orange',
            texture: saturnTexture,
            position: [ 40, 0, 0 ],
            radius: 44,
            rotationSpeed: 0.005
        },
        {
            name: "Saturn",
            color: 'beige',
            texture: jupiterTexture,
            position: [ 160, 0, 0 ],
            radius: 40,
            rotationSpeed: 0.004
        },
        {
            name: "Uranus",
            color: 'aqua',
            texture: uranusTexture,
            position: [ 240, 0, 0 ],
            radius: 36,
            rotationSpeed: 0.003
        },
        {
            name: "Neptune",
            color: 'purple',
            texture: neptuneTexture,
            position: [320, 0, 0 ],
            radius: 32,
            rotationSpeed: 0.002
        },
        {
            name: "Pluto",
            color: 'white',
            texture: plutoTexture,
            position: [ 400, 0, 0 ],
            radius: 12,
            rotationSpeed: 0.005
        },
    ]

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    console.log(sizes)

    // testing area that is currently not working
    /////////////////  /////////////////  /////////////////  ///////////////// 
    // planetData.forEach((planet) => console.log(planet.name))

    console.log(planetData)

    const testmap = planetData.map((planet, idx) => (
  <SphereComp key={idx} position={planet.position} texture={planet.texture} radius={planet.radius} color={planet.color} rotSpeed={planet.rotationSpeed} />
));

    // i have no idea why this is still popping up as undefined
    console.log(testmap)

    console.log(planetData[0])
    console.log(planetData[0].position)
    /////////////////  /////////////////  /////////////////  ///////////////// 

    return (
        <section className='canvas-div'>
            <Canvas className='canvas' id='this-is-the-canvas' camera={{fov: 45, near: 0.1, far: 1000, position: [0,70,600]}}>
                <pointLight position={[10, 10, 10]} />
                <ambientLight />

                {/* {planetData.map((planet, idx) => {
                    <SphereComp key={idx} name={planet.name} position={planet.position} texture={planet.texture} radius={planet.radius} color={planet.color} rotSpeed={planet.rotationSpeed}/>
                })} */}

                <SphereComp name={planetData[0].name} position={planetData[0].position} texture={planetData[0].texture} radius={planetData[0].radius} color={planetData[0].color} rotSpeed={planetData[0].rotationSpeed}/>
                <SphereComp name={planetData[1].name} position={planetData[1].position} texture={planetData[1].texture} radius={planetData[1].radius} color={planetData[1].color} rotSpeed={planetData[1].rotationSpeed}/>
                <SphereComp name={planetData[2].name} position={planetData[2].position} texture={planetData[2].texture} radius={planetData[2].radius} color={planetData[2].color} rotSpeed={planetData[2].rotationSpeed}/>
                <SphereComp name={planetData[3].name} position={planetData[3].position} texture={planetData[3].texture} radius={planetData[3].radius} color={planetData[3].color} rotSpeed={planetData[3].rotationSpeed}/>
                <SphereComp name={planetData[4].name} position={planetData[4].position} texture={planetData[4].texture} radius={planetData[4].radius} color={planetData[4].color} rotSpeed={planetData[4].rotationSpeed}/>
                <SphereComp name={planetData[5].name} position={planetData[5].position} texture={planetData[5].texture} radius={planetData[5].radius} color={planetData[5].color} rotSpeed={planetData[5].rotationSpeed}/>
                <SphereComp name={planetData[6].name} position={planetData[6].position} texture={planetData[6].texture} radius={planetData[6].radius} color={planetData[6].color} rotSpeed={planetData[6].rotationSpeed}/>
                <SphereComp name={planetData[7].name} position={planetData[7].position} texture={planetData[7].texture} radius={planetData[7].radius} color={planetData[7].color} rotSpeed={planetData[7].rotationSpeed}/>
                <SphereComp name={planetData[8].name} position={planetData[8].position} texture={planetData[8].texture} radius={planetData[8].radius} color={planetData[8].color} rotSpeed={planetData[8].rotationSpeed}/> 
                <SphereComp name={planetData[9].name} position={planetData[9].position} texture={planetData[9].texture} radius={planetData[9].radius} color={planetData[0].color} rotSpeed={planetData[9].rotationSpeed}/> 
            </Canvas>
        </section>
      );
    }
 
export default CanvasComp;