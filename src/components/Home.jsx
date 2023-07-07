import React, { useState } from 'react';

const HomePage = () => {
  const spaceFacts = [
    'The Sun is a star, and it accounts for 99.86% of the mass in the solar system.',
    'The Milky Way galaxy contains billions of stars, and it is estimated that there are over 100 billion galaxies in the observable universe.',
    'A black hole is a region in space with gravity so strong that nothing, not even light, can escape its pull.',
    'Neutron stars are incredibly dense objects that form when a massive star collapses under its own gravity after a supernova explosion.',
    'Astronauts experience microgravity in space, which can lead to changes in their bodies such as bone and muscle loss.',
    'The International Space Station (ISS) is a habitable space station that serves as a laboratory for scientific research and international cooperation.',
    'Jupiter, the largest planet in our solar system, has a famous feature known as the Great Red Spot, which is a persistent high-pressure storm.',
    'The Hubble Space Telescope, launched in 1990, has provided stunning images and valuable scientific data about the universe.',
    'The speed of light in a vacuum is approximately 299,792 kilometers per second, or about 186,282 miles per second.',
    'The concept of a "day" and a "year" is different in space. For example, a day on Venus is longer than its year.',
  ];

  const [randomFact, setRandomFact] = useState('');

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    setRandomFact(spaceFacts[randomIndex]);
  };

  return (
    <div>
      <h1>.NebulaNav</h1>
      <p>Here is a random fact about space:</p>
      <p>{randomFact}</p>
      <button onClick={getRandomFact}>Get Random Fact</button>
      <div style={gridContainerStyle}>
        <a href="/planets" style={squareStyle}>Planets</a>
        <a href="/moons" style={squareStyle}>Moons</a>
        <a href="/bodies" style={squareStyle}>Space Bodies</a>
        <a href="/solar-system" style={squareStyle}>Solar System</a>
      </div>
    </div>
  );
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
};

const squareStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  height: '200px',
  backgroundColor: 'lightblue',
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '18px',
};

export default HomePage;
