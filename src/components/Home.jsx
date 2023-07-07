import Transition from "./Transition";
import * as THREE from 'three';
import '../App.css';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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

const Home = () => {

function showMap() {


// Scene
const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 1, 100, 2);
light.position.set(10, 10, 10);
scene.add(light);

// Second Light
const centerLight = new THREE.PointLight(0xffff00, 0.5, 50);
centerLight.position.set(0, 0, 0);
scene.add(centerLight);
// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

// Camera
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 70;
camera.far = 5000; // Increase the far clipping plane value
camera.updateProjectionMatrix();
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = false;
controls.autoRotateSpeed = 5;

// Resizing
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Sphere Data
const sphereData = [
  { color: 'yellow', radius: 48, position: { x: -360, y: 0, z: 0 }, rotationSpeed: 0 },
  { color: 'burlywood', radius: 20, position: { x: -280, y: 0, z: 0 }, rotationSpeed: 0.009 },
  { color: 'brown', radius: 24, position: { x: -200, y: 0, z: 0 }, rotationSpeed: 0.008 },
  { color: 'blue', radius: 28, position: { x: -120, y: 0, z: 0 }, rotationSpeed: 0.007 },
  { color: 'red', radius: 28, position: { x: -40, y: 0, z: 0 }, rotationSpeed: 0.006 },
  { color: 'orange', radius: 44, position: { x: 40, y: 0, z: 0 }, rotationSpeed: 0.005 },
  { color: 'beige', radius: 40, position: { x: 160, y: 0, z: 0 }, rotationSpeed: 0.004 },
  { color: 'aqua', radius: 36, position: { x: 240, y: 0, z: 0 }, rotationSpeed: 0.003 },
  { color: 'purple', radius: 32, position: { x: 320, y: 0, z: 0 }, rotationSpeed: 0.002 },
  { color: 'white', radius: 12, position: { x: 400, y: 0, z: 0 }, rotationSpeed: 0.005 },
];

// Create a group to hold the spheres
const spheresGroup = new THREE.Group();

// Create Spheres
sphereData.forEach((data, index) => {
  const geometry = new THREE.SphereGeometry(data.radius, 64, 64);

  let material;
  if (data.color === 'yellow') {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(sunTexture) });
  } else if (index === 1) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(mercuryTexture) });
  } else if (index === 2) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(venusTexture) });
  } else if (index === 3) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(earthTexture) });
  } else if (index === 4) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(marsTexture) });
  } else if (index === 5) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(jupiterTexture) });
  } else if (index === 6) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(saturnTexture) });
  } else if (index === 7) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(uranusTexture) });
  } else if (index === 8) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(neptuneTexture) });
  } else if (index === 9) {
    material = new THREE.MeshStandardMaterial({ map: textureLoader.load(plutoTexture) });
  } else {
    material = new THREE.MeshStandardMaterial({ color: data.color });
  }

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(data.position.x, data.position.y, data.position.z);

  // Add the mesh to the spheres group
  spheresGroup.add(mesh);
});

// Add the spheres group to the scene
scene.add(spheresGroup);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
 

// Render Loop
const render = () => {
  controls.update();

  // Rotate the other spheres around the yellow sphere
  const yellowSphere = spheresGroup.children[0]; // Get the yellow sphere

  spheresGroup.children.forEach((sphere, index) => {
    if (index !== 0) {
      const rotationSpeed = sphereData[index].rotationSpeed;
      const axis = new THREE.Vector3(0, 1, 0).normalize();
      sphere.position.sub(yellowSphere.position);
      sphere.position.applyAxisAngle(axis, rotationSpeed);
      sphere.position.add(yellowSphere.position);
    }
  });

  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
render();

// Timeline


// Mouse Interaction
let mouseDown = false;
window.addEventListener('mousedown', () => (mouseDown = true));
window.addEventListener('mouseup', () => (mouseDown = false));
}

return (
  <Transition>
    <div className="home-div">
      <h1>Welcome to the 3D Map of Outer Space</h1>
      <p>Explore the wonders of the universe with our interactive 3D map.</p>
      
      <canvas className="webgl"></canvas>
      <button onClick={showMap}>Lets check out their orbits</button>
    </div>
  </Transition>
);
};

export default Home;




   
// export default Home;
