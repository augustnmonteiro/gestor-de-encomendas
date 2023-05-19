import '../header/Nav.css';
import { Link } from "react-router-dom";
import logo from '../../logo.png'

function Navbar() {
    return (
        <div className="header">
            <div className="logo-header"><Link to="/"><img src={logo}/></Link></div>
            <nav>
                <ul className="list-header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                     <li>
                        <Link to="/packages/add">Cadastro</Link>
                    </li>
                    <li>
                        <Link to="/packages">Pesquisar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;