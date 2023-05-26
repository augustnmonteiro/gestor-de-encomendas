import { UserContext } from '../context/userContext';
import React, { useState } from 'react';
import Request from '../utilities';
import "./componentSearch.css";

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
                <option value="">TODOS</option>
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
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512"><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336"/></svg>
            <span className="span">BUSQUE POR UMA ENCOMENDA: </span><br />
            <label className='search-form, label' htmlFor="search-form">
                <select id="select" className="opcoes" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="name">TITULAR</option>
                    <option value="cod_order">CÓDIGO</option>
                    <option value="weight">PESO</option>
                    <option value="shelf">PRATELEIRA</option>
                    <option value="bookcase">ESTANTE</option>
                    <option value="status">STATUS</option>
                </select>
                <br />
            </label>
            {renderInput()}
        </div>
    )
}

export default Search;
