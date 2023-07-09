import React, { useState } from "react";
import Transition from "./Transition";

const Home = () => {
  const spaceFacts = [
    "The Sun is a star, and it accounts for 99.86% of the mass in the solar system.",
    "The Milky Way galaxy contains billions of stars, and it is estimated that there are over 100 billion galaxies in the observable universe.",
    "A black hole is a region in space with gravity so strong that nothing, not even light, can escape its pull.",
    "Neutron stars are incredibly dense objects that form when a massive star collapses under its own gravity after a supernova explosion.",
    "Astronauts experience microgravity in space, which can lead to changes in their bodies such as bone and muscle loss.",
    "The International Space Station (ISS) is a habitable space station that serves as a laboratory for scientific research and international cooperation.",
    "Jupiter, the largest planet in our solar system, has a famous feature known as the Great Red Spot, which is a persistent high-pressure storm.",
    "The Hubble Space Telescope, launched in 1990, has provided stunning images and valuable scientific data about the universe.",
    "The speed of light in a vacuum is approximately 299,792 kilometers per second, or about 186,282 miles per second.",
    'The concept of a "day" and a "year" is different in space. For example, a day on Venus is longer than its year.',
  ];

  const [randomFact, setRandomFact] = useState("");

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    setRandomFact(spaceFacts[randomIndex]);
  };

  const handleFactButtonClick = (e) => {
    e.stopPropagation();
    getRandomFact();
  };

  const handleSquareHover = (e) => {
    const info = e.currentTarget.querySelector(".hover-info");
    info.style.display = "block";
  };

  const handleSquareLeave = (e) => {
    const info = e.currentTarget.querySelector(".hover-info");
    info.style.display = "none";
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>.nebulaNav</h1>
      <Transition in={randomFact !== ""} timeout={500} classNames="slide">
        <p>{randomFact}</p>
      </Transition>
      <button
        onClick={handleFactButtonClick}
        style={{
          background: "transparent",
          border: "1px solid white",
          color: "white",
        }}
      >
        Learn Something Cool
      </button>
      <div style={contentContainerStyle}>
        <div style={additionalInfoContainerStyle}>
          <p style={additionalInfoStyle}>
            Welcome to .nebulaNav, your gateway to the wonders of space! Explore our
            collection of information about the universe, from fascinating facts
            about celestial bodies to captivating images and interactive
            experiences. Start your cosmic journey now!
          </p>
        </div>
        <div style={gridContainerStyle}>
          <a
            href="/planets"
            style={{
              ...squareStyle,
              backgroundImage:
                "url(https://i.pinimg.com/originals/74/5b/a9/745ba9553c9e32f2373b81d92da6f290.gif)",
            }}
            className="square"
            onMouseEnter={handleSquareHover}
            onMouseLeave={handleSquareLeave}
          >
            <span className="square-text"> </span>
            <div className="hover-info">
              Explore the planets of our solar system.
            </div>
          </a>
          <a
            href="/bodies"
            style={{
              ...squareStyle,
              backgroundImage:
                "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnNmbzJsb2IzYXJqYnN6aDA2MndjandleXgwbmZvbjBzemo4cHEzcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PNf2Ke7gn6oDK/source.gif)",
            }}
            className="square"
            onMouseEnter={handleSquareHover}
            onMouseLeave={handleSquareLeave}
          >
            <span className="square-text"> </span>
            <div className="hover-info">
              Learn about our Sun.
            </div>
          </a>
          <a
            href="/moons"
            style={{
              ...squareStyle,
              backgroundImage:
                "url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXBhYmo2M3QxYzJxaWk3OTFyaWcxYWFncWNtM2ZpeXg1YWI0YW52ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDa6dnB0CABmv9N1X4/200.gif)",
            }}
            className="square"
            onMouseEnter={handleSquareHover}
            onMouseLeave={handleSquareLeave}
          >
            <span className="square-text">  </span>
            <div className="hover-info">
              Discover the natural satellites of various planets.
            </div>
          </a>
          <a
            href="/solar-system"
            style={{
              ...squareStyle,
              backgroundImage:
                "url(https://gifdb.com/images/high/solar-system-planets-motion-2qrm6pej5euz3lsz.gif)",
            }}
            className="square"
            onMouseEnter={handleSquareHover}
            onMouseLeave={handleSquareLeave}
          >
            <span className="square-text"> </span>
            <div className="hover-info">
              Navigate through a 3D model of our solar system.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
  marginLeft: "2vmin",
  overflow: "auto",
};


const headingStyle = {
  marginTop: "20px",
};

const contentContainerStyle = {
  display: "flex",
};

const additionalInfoContainerStyle = {
  flex: "1",
  marginLeft: "20px",
  maxWidth:'20rem',
  marginRight:'10vmin',
  backdropFilter: 'blur(2px)',
  backgroundColor: 'transparent',
  border: '1px solid rgb(255, 255, 255)',
  borderRadius:'10px',
  padding:'2rem',
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.9)",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",
  marginTop: "50px",
  justifyContent: "center",
  
};


const squareStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "290px",
  height: "290px",
  backgroundColor: "transparent",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  position: "relative",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
  cursor: "pointer",
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.9)",
};

const additionalInfoStyle = {
  fontSize: "16px",
  marginTop:"10rem",
  
};

export default Home;
