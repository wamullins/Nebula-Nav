import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const planets_resp = await axios.get(`https://nebula-nav-api.vercel.app/planets`);
            console.log(planets_resp)
            
            setPlanets(planets_resp.data);
        };

        getStuff();
    }, []);

    if (planets.length===0) {return <div className="loading">Loading Planets...</div>} 

    return (
        <div className="planets-grid">
            {
                planets.map((planet) => (
                    <Link to={`${planet.name}`} className="planets-div" key={planet._id}>
                        <p className="div-title-text">{planet.name}</p>
                        <p className="mass-text">{planet.mass}</p>
                        <p className="diameter-text">{planet.diameter}</p>
                        <p className="dist_from_sun-text">{planet.dist_from_sun}</p>
                        <p className="terrain-text">{planet.terrain}</p>
                        <p className="water-text">{planet.has_water}</p>
                        <p className="alien-text">{planet.has_aliens}</p>
                        <p className="surf-temp-text">{planet.surface_temperature}</p>
                        <p className="gravity-text">{planet.gravity}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Planets