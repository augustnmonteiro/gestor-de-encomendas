import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                     <li>
                        <Link to="/cadastro">Cadastro</Link>
                    </li>
                    <li>
                        <Link to="/list">Pesquisar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;