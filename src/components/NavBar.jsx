import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();


  return (
    <nav>
      <ul>
        <li ><Link to="/aboutme">About Me</Link></li>
        <li ><Link to="/portfolio">Portfolio</Link></li>
        <li ><Link to="/contact">Contact</Link></li>
        <li ><Link to="/Resume"><Resume></Resume></Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
