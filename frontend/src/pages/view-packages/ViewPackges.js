import './ViewPackages.css';
import { useState, useEffect } from 'react';
import DropdownOrder from "../../components/dropdown-order/dropdownOrder";

function request(url, options) {
  url = 'http://localhost:3001' + url;
  return fetch(url, options);
}

function ViewPackges() {

  const [listOrders, setListOrders] = useState([]);

  const orderList = (order) => {
    request('/orders?order=' + order).then((response) => {
      response.json().then((orders) => {
        setListOrders(orders);
      });
    });
  };

  const loadOrders = () => {
    request('/orders/').then((response) => {
      response.json().then((orders) => {
        setListOrders(orders);
      });
    });
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="ViewPackages">

      <span>Encomendas cadastradas:</span>
      <DropdownOrder onClick={orderList} />
      <ul className="order-list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cod order</th>
              <th>Peso </th>
              <th> Altura</th>
              <th>Largura </th>
              <th>Profundidade </th>
              <th>Prateleira</th>
              <th>Estante </th>
              <th> Status </th>
            </tr>
          </thead>

          <tbody>
            {listOrders.map((orders) => {
              return <tr key={orders.id}>
                <td>{orders.name}</td>
                <td>{orders.cod_order}</td>
                <td>{orders.weight}</td>
                <td>{orders.height}</td>
                <td>{orders.width}</td>
                <td>{orders.depth}</td>
                <td>{orders.shelf}</td>
                <td>{orders.bookcase}</td>
                <td>{orders.status}</td>
              </tr>
            })}
          </tbody>
        </table>
      </ul>
    </div>
  )
}

export default ViewPackges;