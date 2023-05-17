import { UserContext } from '../context/userContext';
import React, { useState } from 'react';
import Request from '../utilities';

function Search() {
    const { listOrders, setListOrders, listOrdersComplet, setListOrdersComplet } = React.useContext(UserContext);
    const [type, setType] = useState("name");
    const [status, setStatus] = useState("");
    const [showResults, setShowResults] = useState(false);

    //opções de busca
    function buscaOrders(busca) {
        let search;
        let url = '/orders';
        if (busca.length < 1) {
                Request(url).then((response) => {
                  response.json().then((orders) => {
                    setListOrders(orders);
                  });
                });
        } else {
            search = busca;
            fetch(`http://localhost:3001/orders?type=${type}&busca=${search}`)
            .then((response) => {
                response.json().then((orders) => {
                    setListOrders(orders);
                });
            });
        }

       

    }


    function mudaPesquisa(type) {
        setType(type);
        (type === "status") ?
            setShowResults(true) : setShowResults(false);
    }


    function buscaStatus(status) {
        setStatus(status);
        buscaOrders(status);

    }

    return (
        <div className='componentSearch'>
            <label className='search-form' htmlFor="search-form">
                <span className="pesquisa">Busque por uma encomenda: </span><br />
                <select id="opcoes" className="opcoes" value={type} onChange={(e) => mudaPesquisa(e.target.value)}>
                    <option value="name">Titular</option>
                    <option value="cod_order">Código</option>
                    <option value="weight">Peso</option>
                    <option value="shelf">Prateleira</option>
                    <option value="bookcase">Estante</option>
                    <option value="status">Status</option>
                </select>


                {!showResults ? <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="BUSQUE POR UMA ENCOMENDA"
                    onChange={(e) => buscaOrders(e.target.value)}
                /> : <select id="status" className="status" value={status} onChange={(e) => buscaStatus(e.target.value)}>
                    <option value=" "></option>
                    <option value="ENTREGUE">ENTREGUE</option>
                    <option value="SAIU PARA ENTREGA">SAIU PARA ENTREGA</option>
                    <option value="AGUARDANDO ENVIO">AGUARDANDO ENVIO</option>

                </select>}
                <br />
            </label>
        </div>
    )
}

export default Search;