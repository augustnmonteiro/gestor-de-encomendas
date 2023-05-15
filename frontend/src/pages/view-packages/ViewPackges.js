import './ViewPackages.css';
import UpdatedStatus from '../../components/updateStatus/update';
import { useState, useEffect } from 'react';



function ViewPackges() {

  const [listOrders, setListOrders] = useState([]);


  const loadOrders = () => {
    fetch('http://localhost:3001/orders/').then((response) => {
      response.json().then((orders) => {
        setListOrders(orders);
      });
    });
  };

  useEffect(() => {
    loadOrders();
  }, []);

  function translateStatus(status) {
    if (status === 'WAITING_TO_BE_SENT') {
      return 'AGUARDANDO ENVIO';
    } else if (status === 'OUT_FOR_DELIVERY') {
      return 'SAIU PARA ENTREGA';
    } else if (status === 'DELIVERED') {
      return 'ENTREGUE';
    } else {
      return '';
    }
  }

  return (
    <div className="ViewPackages">
      <span>Encomendas cadastradas:</span>
      <ul className="order-list">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cod order</th>
              <th>Peso </th>
              <th>Altura</th>
              <th>Largura </th>
              <th>Profundidade </th>
              <th>Prateleira</th>
              <th>Estante </th>
              <th>Status </th>
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
                <td>
                {translateStatus(orders.status)}<UpdatedStatus orderId={orders.id} />
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </ul>
    </div>

  )
}

export default ViewPackges;