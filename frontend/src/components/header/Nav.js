import "../header/Nav.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

function Navbar() {
    return (
        <div className="header">
            <div className="logo-header">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <nav>
                <ul className="list-header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/packages">Encomendas</Link>
                    </li>
                    <li>
                        <Link to="/packages/add">Cadastrar Encomenda</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;