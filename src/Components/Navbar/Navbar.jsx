import { Navbar as NavigationBar, Nav, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faArrowRightArrowLeft, faBorderAll, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
        <NavigationBar fixed="bottom" bg="light" variant="light">

            <Nav className="nav">
                <Link to="/home"><FontAwesomeIcon icon={faHouse} /><p>Home</p></Link>
                <Link to="/market"><FontAwesomeIcon icon={faArrowRightArrowLeft} /><p>Mercado</p></Link>
                <Link to="/my-team"><FontAwesomeIcon icon={faBorderAll} /><p>Mi equipo</p></Link>
                <Link to="#ranking"><FontAwesomeIcon icon={faTrophy} /><p>Ranking</p></Link>
                <Link to="#profile"><FontAwesomeIcon icon={faUser} /><p>Perfil</p></Link>
            </Nav>

        </NavigationBar>
    )
}

export default Navbar