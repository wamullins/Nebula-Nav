import { Route, Routes } from 'react-router-dom';
import '../App.css';

 
import Home from './Home';
import CollectionPage from './CollectionPage';
import PlanetPage from './PlanetPage';
import MoonPage from './MoonPage';
import BodyPage from './BodyPage';
import NotFound from './NotFound';
import SolarSystem from './SolarSystem';  

const Main = () => {
  return (
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/planets" element={<CollectionPage />} />
        <Route exact path="/planets/:id" element={<PlanetPage />} />
        <Route exact path="/moons" element={<CollectionPage />} />
        <Route exact path="/moons/:id" element={<MoonPage />} />
        <Route exact path="/bodies" element={<CollectionPage />} />
        <Route exact path="/bodies/:id" element={<BodyPage />} />
        <Route exact path="/solar-system" element={<SolarSystem />} />  
        <Route exact path="/:id" element={<NotFound />} />
      </Routes>
     
  );
};

export default Main;
