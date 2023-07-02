import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Planets from './Planets'
import Moons from './Moons'
import SpaceBodies from './SpaceBodies'

const Main = () => {
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/moons" element={<Moons />} />
        <Route exact path="/space-bodies" element={<SpaceBodies />} />
    </Routes>
}

export default Main