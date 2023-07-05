import { Link, useLocation} from "react-router-dom";
import useApi from "../useApi"

const ObjectPage = () => {

    let location = useLocation()
    let path = location.pathname

    

    const { data:object } = useApi(path)

    // if { path !== }

    if ( path.includes("planets") && !object) {return <h3>Loading Planet</h3>}
    if ( path.includes("moons") && !object) {return <h3>Loading Moon</h3>}
    if ( path.includes("bodies") && !object) {return <h3>Loading Body</h3>}

    return (
        <div className="detail-div">
            <p className="detail-div-title-text">{object.name}</p>
            <p className="mass-text">Mass: {object.mass}</p>
            <p className="diameter-text">Diameter: {object.diameter}</p>
            <p className="dist_from_sun-text">Distance from the Sun:{object.dist_from_sun}</p>
            <p className="terrain-text">Terrain: {object.terrain}</p>
            <p className="water-text">Water Present: {object.has_water}</p>
            <p className="alien-text">Aliens: {object.has_aliens}</p>
            <p className="surf-temp-text">Average Surface Temperature: {object.surface_temperature}</p>
            <p className="gravity-text">Gravity: {object.gravity}</p>
            <Link to="/planets" className="back-btn">Back</Link>
        </div>
    ) 
}

export default ObjectPage