import './ViewPackages.css';
import { useState, useEffect } from 'react';
import DropdownOrder from "../../components/dropdown-order/dropdownOrder";
import Request from "../../utilities";

function ViewPackges() {

  const [listOrders, setListOrders] = useState([]);

  const loadOrders = (order) => {
    let url = '/orders';
    if (order) {
      url = '/orders?order=' + order;
    }
    
    Request(url).then((response) => {
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
      <DropdownOrder onClick={loadOrders} />
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