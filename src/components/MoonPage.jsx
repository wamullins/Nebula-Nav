import { Link, useLocation} from "react-router-dom";
import useApi from "../useApi"

const MoonPage = () => {

    let location = useLocation()
    let path = location.pathname

    const { data:object } = useApi(path)

    if (!object) {return <h3>Loading Moon</h3>}
    if ((typeof object) !== "object") {return <h3>{object}</h3>}

    return (
        <div className="detail-div">
            <p className="detail-div-title-text">{object.name}</p>
            <p className="home-planet-text">Orbiting around {object.home_planet}</p>
            <p className="mass-text">Mass: {object.mass}</p>
            <p className="diameter-text">Diameter: {object.diameter}</p>
            <p className="dist_from_planet-text">Distance from {object.home_planet}:{object.dist_from_planet}</p>
            <p className="water-text">Water Present: {object.has_water}</p>
            <p className="surf-temp-text">Surface Temperature: {object.surface_temperature}</p>
            <p className="gravity-text">Gravity: {object.gravity}</p>
            <Link to="/moons" className="back-btn">Back</Link>
        </div>
    )
}

export default MoonPage