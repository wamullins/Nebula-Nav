import { Route, Routes } from "react-router-dom";

import Home from './Home'
import Planets from './Planets'
import Moons from './Moons'
import SpaceBodies from './SpaceBodies'
import SearchResults from "./SearchResults"; // delete this

import PlanetPage from "./PlanetPage";
import MoonPage from "./MoonPage"
import SpaceBodyPage from "./SpaceBodyPage";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/planets" element={<Planets />} />
            <Route exact path="/planets/:id" element={<PlanetPage />} />
            <Route exact path="/moons" element={<Moons />} />
            <Route exact path="/moons/:id" element={<MoonPage />} />
            <Route exact path="/space-bodies" element={<SpaceBodies />} />
            <Route exact path="/space-bodies/:id" element={<SpaceBodyPage />} />
            <Route exact path="/:id" element={<SearchResults />} /> // makethis some 404 type deal
        </Routes>
    )
   
}

export default Main


