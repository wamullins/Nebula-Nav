import { Link, useLocation } from "react-router-dom";
import useApi from "../useApi";
import Transition from "./Transition";
import CommentSubmit from "./CommentSubmit";
import CommentSection from "./CommentSection";

const PlanetPage = () => {
  let location = useLocation();
  let path = location.pathname;

  const { data: object } = useApi(path);

  if (!object) {
    return <h3>Loading Planet</h3>;
  }
  if (typeof object !== "object") {
    return <h3>{object}</h3>;
  }

  return (
    <Transition>  
      <div className="detail-div">
        <p className="detail-div-title-text">{object.name}</p>
          <div className="planetImage">
            <img className="objectImg" src= {object.image} width="200" height="200" />
          </div>
        <p className="mass-text">Mass: {object.mass}</p>
        <p className="diameter-text">Diameter: {object.diameter}</p>
        <p className="dist_from_sun-text">
          Distance from the Sun: {object.dist_from_sun}
        </p>
        <p className="terrain-text">Terrain: {object.terrain}</p>
        <p className="water-text">Water Present: {object.has_water}</p>
        <p className="alien-text">Aliens: {object.has_aliens}</p>
        <p className="surf-temp-text">
          Average Surface Temperature: {object.surface_temperature}
        </p>
        <p className="gravity-text">Gravity: {object.gravity}</p>
        <Link to="/planets" className="back-btn">
          Go to Planets List
        </Link>
        <CommentSubmit objectId={object._id}/>
        <CommentSection objectId={object._id}/>
      </div>
    </Transition>
  );
};

export default PlanetPage;
