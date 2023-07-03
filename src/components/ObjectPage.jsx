import { useEffect, useState, useContext  } from "react";
import DataContext from '../DataContext'
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ObjectPage = () => {

    const [object, setObject] = useState()
    //setting up the param to pull to be the ship's ID

    // using context to identify what collection to be looking in
    const { displayInfo, setDisplayInfo } = useContext(DataContext)

    let { id } = useParams()

    console.log(displayInfo.collection)

    useEffect(()=>{
        const getObject = async() => {
            const response = await axios.get(`https://nebula-nav-api.vercel.app/${displayInfo.collection}/${id}`)
            setObject(response.data)
        }
        getObject()
    },[])

    if ( displayInfo.collection==="planets" && !object) {return <h3>Loading Planet</h3>}
    return (
        <div className="detail-div">
            <p className="div-title-text">{object.name}</p>
                <p className="mass-text">{object.mass}</p>
                <p className="diameter-text">{object.diameter}</p>
                <p className="dist_from_sun-text">{object.dist_from_sun}</p>
                <p className="terrain-text">{object.terrain}</p>
                <p className="water-text">{object.has_water}</p>
                <p className="alien-text">{object.has_aliens}</p>
                <p className="surf-temp-text">{object.surface_temperature}</p>
                <p className="gravity-text">{object.gravity}</p>
            <Link to="/planets" className="back-btn">Back</Link>
        </div>
    ) 
}

export default ObjectPage