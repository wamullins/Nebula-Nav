import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../DataContext'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    let navigate = useNavigate()

    const { displayInfo, setDisplayInfo}  = useContext(DataContext);

    const handleClick = (e) => {
        e.preventDefault()

        //clicking on one of these buttons will update the session storage, the context, and navigate to the appropriate url

        setDisplayInfo({
            ...displayInfo, 
            collectionType: e.target.value
        })

        // console.log(`clicked on ${e.target.value}`)
        sessionStorage.setItem("collectionType", e.target.value)
        navigate(`/${e.target.value}`)
    }

    


    return (
        <div className="nav-links">
            <Link to="/">Home</Link>
            <button value="planets" onClick={handleClick}>Planets</button>
            <button value="moons" onClick={handleClick}>Moons</button>
            <button value="bodies" onClick={handleClick}>Space Bodies</button>
        </div>
    )
}

export default Nav