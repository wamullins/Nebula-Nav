import { Link, useLocation} from "react-router-dom";
import useApi from "../useApi"

const CollectionPage = () => {

    let location = useLocation()
    let path = location.pathname
    // console.log(path)

    const { data:collection } = useApi(path) // data:collection is changing the name of what i am unpacking "give me data, but reanme it as collection (here)"

    // console.log(collection)

    if (!collection) {return <div className="loading">Loading...</div>} 

    return (
        <div className="collection-grid">
            {
                collection.map((object) => (
                    <Link to={`${object.name}`} className="object-div" key={object._id}>
                        <p className="div-title-text">{object.name}</p>
                        <div> the model or an image is going to look great right here</div>
                    </Link>
                ))
            }
        </div>
    )
    
}

export default CollectionPage