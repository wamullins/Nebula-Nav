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
                        <div> the model or an image is going to look great right here</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Planets