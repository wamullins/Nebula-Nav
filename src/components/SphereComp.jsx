import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFrame, useThree } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Component for rendering the orbit of the planet
function PlanetOrbit({ radius }) {
  return (
    <Torus
      args={[radius, 0.2, 64, 128]}
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[1, 1, 1]}
    >
      <meshBasicMaterial attach="material" color="white" wireframe />
    </Torus>
  );
}

// Component for rendering the planet sphere
function SphereComp(props) {
  const texture = useTexture(props.texture);
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { camera } = useThree();

  // Add orbit controls
  const controls = useRef();
  useFrame(() => {
    controls.current.update();
  });

  // Subscribe this component to the render-loop, update position and rotation every frame
  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const orbitSpeed = props.rotSpeed;
    const orbitRadius = props.position[0];
    const x = Math.cos(elapsedTime * orbitSpeed) * orbitRadius;
    const z = Math.sin(elapsedTime * orbitSpeed) * orbitRadius;

    ref.current.position.set(x, 0, z);
    ref.current.rotation.y += props.rotSpeed;
  });

  // Handle click event
  const handleClick = (name) => {
    if (name === "Sun") {
      navigate(`/bodies/${props.name}`);
    } else {
      navigate(`/planets/${props.name}`);
    }
  };

  return (
    <group>
      {/* Render the planet's orbit if it's not the Sun */}
      {props.name !== "Sun" && <PlanetOrbit radius={props.position[0]} />}

      {/* Render the planet sphere */}
      <mesh
        {...props}
        ref={ref}
        scale={hovered ? 1.1 : 1}
        onClick={() => handleClick(props.name)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[props.radius, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/*   OrbitControls */}
      <OrbitControls
        ref={controls}
        args={[camera]}
        enablePan={true}
        enableRotate={true}
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN,
        }}
      />
    </group>
  );
}

export default SphereComp;



// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom"


// // https://www.youtube.com/watch?v=hgWxXJW3o6U&ab_channel=HacktheNorth -- helpful video, haven't seen all of it
// // https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures -- cite to show how to load textures
// // https://www.google.com/search?q=three+js+with+react+setting+camera&sxsrf=AB5stBhoU711MGPqDGQtXcHciqoREGtnXQ%3A1688682279328&ei=Jz-nZMK1E9qaptQP896xyAg&ved=0ahUKEwiC5Zbbj_v_AhVajYkEHXNvDIkQ4dUDCBA&uact=5&oq=three+js+with+react+setting+camera&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgATIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB06CggAEEcQ1gQQsAM6CggAEIoFELADEEM6BQgAEIAEOgYIABAWEB46BQghEKsCOgoIIRAWEB4QDxAdSgQIQRgAUJkEWL8cYOodaAFwAXgBgAF8iAGdC5IBBDExLjSYAQCgAQHAAQHIAQo&sclient=gws-wiz-serp#kpvalbx=_TKKnZJ6SKKbtptQPotWn2AI_32 -- some camera settings
// import { useFrame } from "@react-three/fiber";
// import { useTexture } from "@react-three/drei" // this will require npm i three @react-three/drei
 
// function SphereComp(props) {

//     let navigate = useNavigate()

//     const texture = useTexture(props.texture)

//     console.log(`from sphere, ${props.texture}`)
//     console.log(props)

//     // This reference gives us direct access to the THREE.Mesh object
//     const ref = useRef();
//     // Hold state for hovered and clicked events
//     const [hovered, hover] = useState(false);
//     // const [clicked, click] = useState(false);
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (ref.current.rotation.y += props.rotSpeed));
//     // Return the view, these are regular Threejs elements expressed in JSX

//     const handleClick = (name) => {
//         if (name === "Sun") {
//             navigate(`/bodies/${props.name}`)
//         } else {
//             navigate(`/planets/${props.name}`)
//         }
//     }


//     return (
//         <mesh
//         {...props}
//         ref={ref}
//         scale={hovered ? 1.1 : 1}
//         onClick={(event) => handleClick(props.name)} /// can use an onclick function to change the url. i don't have routers set up on this so i can't use usenaviate, so for now it is just console logging out
//         onPointerOver={(event) => hover(true)}
//         onPointerOut={(event) => hover(false)}
//         >
//         <sphereGeometry args={[props.radius,64,64]} />
//         <meshStandardMaterial
//             // color={hovered ? "hotpink" : "orange"} // can use this type of thing to show stuff when it's hovering (name, some inital info)
//             map= {texture}
//         />
//         </mesh>
//     );
// }
 
// export default SphereComp;
