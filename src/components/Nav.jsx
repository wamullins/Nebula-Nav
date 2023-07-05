import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    let navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        //clicking on one of these buttons will navigate to the appropriate url
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