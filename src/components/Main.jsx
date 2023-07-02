import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Planets from './Planets'
import Moons from './Moons'
import SpaceBodies from './SpaceBodies'
import SearchResults from "./SearchResults";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/planets" element={<Planets />} />
            <Route exact path="/moons" element={<Moons />} />
            <Route exact path="/space-bodies" element={<SpaceBodies />} />
            <Route exact path="/:id" element={<SearchResults />} />
        </Routes>
    )
   
}

export default Main