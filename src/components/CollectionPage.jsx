import axios from "axios";
import { useState, useEffect, useContext } from "react";
import DataContext from '../DataContext'
import { Link } from "react-router-dom";

const CollectionPage = () => {

    const { displayInfo, setDisplayInfo } = useContext(DataContext)

    const [collection, setCollection] = useState();

    useEffect(() => {
        const getStuff = async () => {
            const collection_resp = await axios.get(`https://nebula-nav-api.vercel.app/${displayInfo.collection}`);
            console.log(collection_resp)
            
            setCollection(collection_resp.data);
        };

        getStuff();
    }, []);

    if (!collection) {return <div className="loading">Loading {displayInfo.collection}...</div>} 

    if (displayInfo.collection === "planets") {
        return (
            <div className="collection-grid">
                {
                collection.map((planet) => (
                        <Link to={`${planet.name}`} className="planets-div" key={planet._id}>
                            <p className="div-title-text">{planet.name}</p>
                            <div> the model or an image is going to look great right here</div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default CollectionPage