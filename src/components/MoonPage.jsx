import { Link, useLocation} from "react-router-dom";
import useApi from "../useApi"
import Transition from "./Transition";
import CommentSubmit from "./CommentSubmit";
import CommentSection from "./CommentSection";

const MoonPage = () => {

    let location = useLocation()
    let path = location.pathname

    const { data:object } = useApi(path)

    if (!object) {return <h3>Loading Moon</h3>}
    if ((typeof object) !== "object") {return <h3>{object}</h3>}

    return (
        <Transition> 
             <div className="detail-div">
                <p className="detail-div-title-text">{object.name}</p>
                    <div className="planetImage">
                        <img className="objectImg" src= {object.image} width="200" height="200" />
                    </div>
                <p className="home-planet-text">Orbiting around {object.home_planet}</p>
                <p className="mass-text">Mass: {object.mass}</p>
                <p className="diameter-text">Diameter: {object.diameter}</p>
                <p className="dist_from_planet-text">Distance from {object.home_planet}:{object.dist_from_planet}</p>
                <p className="water-text">Water Present: {object.has_water}</p>
                <p className="surf-temp-text">Surface Temperature: {object.surface_temperature}</p>
                <p className="gravity-text">Gravity: {object.gravity}</p>
                <Link to="/moons" className="back-btn">Go to Moons List</Link>
                <CommentSubmit objectId={object._id}/>
                <CommentSection objectId={object._id}/>
            </div>
        </Transition>
       
    )
}

export default MoonPage