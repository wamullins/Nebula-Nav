import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // Clicking on one of these links will navigate to the appropriate URL
    navigate(`/${e.target.value}`);
  };

  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/solar-system">Solar System</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/moons">Moons</Link>
      <Link to="/bodies">Our Sun</Link>
    </div>
  );
};

export default Nav;
