import { Link, useLocation } from "react-router-dom";
import useApi from "../useApi";
import Transition from "./Transition";
import '../app.css'

const CollectionPage = () => {
  let location = useLocation();
  let path = location.pathname;
  const { data: collection } = useApi(path);

  if (!collection) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Transition>  
      <div className="collection-grid">
        {collection.map((object) => (
          <Link to={`${object.name}`} className="object-div" key={object._id}>
            <p className="div-title-text">{object.name}</p>
            <img className="objectImg" src= {object.image} width="200" height="200" />
          </Link>
        ))}
      </div>
    </Transition>
  );
};

export default CollectionPage;
