import { useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {

  const {user} = useContext(UserContext);

  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className="container">
        <Link to='/'>
          {user ? 'Juan': 'Sin conexión'}
        </Link>
        <NavLink to="/" className="btn btn-outline-primary" >Inicio </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">Blog </NavLink>
        <NavLink to="/contacto" className="btn btn-outline-primary">Contacto</NavLink>

        </div>
 
    </nav>
  )
}

export default Navbar