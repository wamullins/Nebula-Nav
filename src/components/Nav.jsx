import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../DataContext'

const Nav = () => {

    const { displayInfo, setDisplayInfo } =
    useContext(DataContext)

    return (
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/planets" onClick={()=> {
                setDisplayInfo({
                    ...displayInfo, 
                    collection: "planets"
                })
            }} >Planets</Link>
            <Link to="/moons" onClick={()=> {
                setDisplayInfo({
                    ...displayInfo, 
                    collection: "moons"
                })
            }} >Moons</Link>
            <Link to="/space-bodies" onClick={()=> {
                setDisplayInfo({
                    ...displayInfo, 
                    collection: "space-bodies"
                })
            }}>Space Bodies</Link>
        </div>
    )
}

export default Nav