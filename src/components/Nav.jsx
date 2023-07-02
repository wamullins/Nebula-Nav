import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/moons">Moons</Link>
            <Link to="/space-bodies">Space Bodies</Link>
        </div>
    )
}

export default Nav