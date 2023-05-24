import "./Home.css";
import { Link } from "react-router-dom";
import banner from "./img/banner.svg";

function Home() {
    return (
        <div className="container">
            <div className="container-main">
                <div className="container-info">
                    <h1>TrackLogistic</h1>
                    <h5>Tenha o controle total das suas encomendas com nossa ferramenta de gestão eficiente.</h5>
                    <p>Potencialize a gestão de encomendas da sua empresa com nossa ferramenta eficiente.
                        Tenha o controle total, rastreie e organize remessas de forma simplificada. Receba
                        atualizações em tempo real, ganhe visibilidade sobre o status de cada pacote e
                        otimize seu fluxo de trabalho. Simplifique a logística e melhore a eficiência
                        operacional com nossa solução de gestão de encomendas projetada para atender às
                        necessidades das empresas. Aumente a produtividade e tenha o controle em suas mãos.
                    </p>
                    <Link to="/packages/add" >
                        <button>Experimente Agora</button>
                    </Link>
                </div>
                <div className="container-img">
                    <img src={banner} />
                </div>
            </div>
        </div>
    )
}

export default Home;