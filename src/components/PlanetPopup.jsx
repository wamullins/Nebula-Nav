import { useContext } from 'react'
import PlanetContext from "../PlanetContext"

const PlanetPopup = () => {

    const { planetInfo } = useContext(PlanetContext)

    return (
        <div className="planet-popup">
            <div>{planetInfo.name}</div>
        </div>
    )
}

export default PlanetPopup