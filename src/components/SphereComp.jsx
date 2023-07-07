import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"


// https://www.youtube.com/watch?v=hgWxXJW3o6U&ab_channel=HacktheNorth -- helpful video, haven't seen all of it
// https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures -- cite to show how to load textures
// https://www.google.com/search?q=three+js+with+react+setting+camera&sxsrf=AB5stBhoU711MGPqDGQtXcHciqoREGtnXQ%3A1688682279328&ei=Jz-nZMK1E9qaptQP896xyAg&ved=0ahUKEwiC5Zbbj_v_AhVajYkEHXNvDIkQ4dUDCBA&uact=5&oq=three+js+with+react+setting+camera&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgATIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB06CggAEEcQ1gQQsAM6CggAEIoFELADEEM6BQgAEIAEOgYIABAWEB46BQghEKsCOgoIIRAWEB4QDxAdSgQIQRgAUJkEWL8cYOodaAFwAXgBgAF8iAGdC5IBBDExLjSYAQCgAQHAAQHIAQo&sclient=gws-wiz-serp#kpvalbx=_TKKnZJ6SKKbtptQPotWn2AI_32 -- some camera settings
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei" // this will require npm i three @react-three/drei
 
function SphereComp(props) {

    let navigate = useNavigate()

    const texture = useTexture(props.texture)

    console.log(`from sphere, ${props.texture}`)
    console.log(props)

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    // const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += props.rotSpeed));
    // Return the view, these are regular Threejs elements expressed in JSX

    const handleClick = (name) => {
        if (name === "Sun") {
            navigate(`/bodies/${props.name}`)
        } else {
            navigate(`/planets/${props.name}`)
        }
    }


    return (
        <mesh
        {...props}
        ref={ref}
        scale={hovered ? 1.1 : 1}
        onClick={(event) => handleClick(props.name)} /// can use an onclick function to change the url. i don't have routers set up on this so i can't use usenaviate, so for now it is just console logging out
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        >
        <sphereGeometry args={[props.radius,64,64]} />
        <meshStandardMaterial
            // color={hovered ? "hotpink" : "orange"} // can use this type of thing to show stuff when it's hovering (name, some inital info)
            map= {texture}
        />
        </mesh>
    );
}
 
export default SphereComp;