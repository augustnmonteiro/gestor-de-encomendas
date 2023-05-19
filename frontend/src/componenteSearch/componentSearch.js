import { UserContext } from '../context/userContext';
import React, { useState } from 'react';
import Request from '../utilities';

function Search() {
    const { listOrders, setListOrders } = React.useContext(UserContext);
    const [type, setType] = useState("name");
    const [status, setStatus] = useState("");

    //opções de busca
    function buscaOrders(busca) {
        let url = '/orders';
        if (busca.length > 0) {
            url += `?type=${type}&busca=${busca}`;
        } 
        Request(url)
            .then((response) => {
                response.json().then((orders) => {
                    setListOrders(orders);
                });
            });

    }

    function buscaStatus(status) {
        setStatus(status);
        buscaOrders(status);

    }

    function renderInput() {
        if (type === "status") {
            return <select id="status" className="status" value={status} onChange={(e) => buscaStatus(e.target.value)}>
                <option value=" "></option>
                <option value="DELIVERED">ENTREGUE</option>
                <option value="OUT_FOR_DELIVERY">SAIU PARA ENTREGA</option>
                <option value="WAITING_TO_BE_SENT">AGUARDANDO ENVIO</option>
            </select>
        }
        return <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="BUSQUE POR UMA ENCOMENDA"
            onChange={(e) => buscaOrders(e.target.value)}
        />
    }

    return (
        <div className='componentSearch'>
            <label className='search-form' htmlFor="search-form">
                <span className="pesquisa">Busque por uma encomenda: </span><br />
                <select id="opcoes" className="opcoes" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="name">Titular</option>
                    <option value="cod_order">Código</option>
                    <option value="weight">Peso</option>
                    <option value="shelf">Prateleira</option>
                    <option value="bookcase">Estante</option>
                    <option value="status">Status</option>
                </select>
                {renderInput()}
                <br />
            </label>
        </div>
    )
}

export default Search;
