import { Route, Routes } from "react-router-dom";

import Home from './Home'
import CollectionPage from './CollectionPage'
import ObjectPage from "./ObjectPage";

import NotFound from "./NotFound";

const Main = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path={`/planets`} element={<CollectionPage />} />
            <Route exact path={`/planets/:id`} element={<ObjectPage />} />
            <Route exact path={`/moons`} element={<CollectionPage />} />
            <Route exact path={`/moons/:id`} element={<ObjectPage />} />
            <Route exact path={`/bodies`} element={<CollectionPage />} />
            <Route exact path={`/bodies/:id`} element={<ObjectPage />} />
            <Route exact path="/:id" element={<NotFound />} /> 
        </Routes>
    )
   
}

export default Main


