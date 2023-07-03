import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import DataContext from '../DataContext'

import Home from './Home'
import CollectionPage from './CollectionPage'
import ObjectPage from "./ObjectPage";

import NotFound from "./NotFound";

const Main = () => {

    const { displayInfo } = useContext(DataContext)

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path={`/${displayInfo.collection}`} element={<CollectionPage />} />
            <Route exact path={`/${displayInfo.collection}/:id`} element={<ObjectPage />} />
            <Route exact path="/:id" element={<NotFound />} /> 
        </Routes>
    )
   
}

export default Main


