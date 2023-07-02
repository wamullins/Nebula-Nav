import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PlanetPage = () => {

    const [planet, setPlanet] = useState()
    //setting up the param to pull to be the ship's ID

    let { id } = useParams()

    useEffect(()=>{
        const getPlanet = async() => {
            const response = await axios.get(`https://nebula-nav-api.vercel.app/planets/${id}`)
            setPlanet(response.data)
        }
        getPlanet()
    },[])

    if (!planet) {return <h3>Loading Planet</h3>}
    return (
        <div className="detail-div">
            <p className="div-title-text">{planet.name}</p>
                <p className="mass-text">{planet.mass}</p>
                <p className="diameter-text">{planet.diameter}</p>
                <p className="dist_from_sun-text">{planet.dist_from_sun}</p>
                <p className="terrain-text">{planet.terrain}</p>
                <p className="water-text">{planet.has_water}</p>
                <p className="alien-text">{planet.has_aliens}</p>
                <p className="surf-temp-text">{planet.surface_temperature}</p>
                <p className="gravity-text">{planet.gravity}</p>
            <Link to="/planets" className="back-btn">Back</Link>
        </div>
    ) 
}

export default PlanetPage