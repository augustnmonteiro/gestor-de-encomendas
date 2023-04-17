import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
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