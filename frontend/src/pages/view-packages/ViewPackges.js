import './ViewPackages.css';
import UpdatedStatus from '../../components/updateStatus/update';
import React, { useState, useEffect } from 'react';
import DropdownOrder from "../../components/dropdown-order/dropdownOrder";
import Request from "../../utilities";
import Search from '../../componenteSearch/componentSearch';
import { UserContext } from '../../context/userContext';


function ViewPackges() {

  const { listOrders, setListOrders } = React.useContext(UserContext);
  const [totalWeight, setTotalWeight] = useState("-");
  const [totalPackages, setTotalPackages] = useState("-");
  const [totalPackagesByStatus, setTotalPackagesByStatus] = useState([]);

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

  const loadTotalWeight = () => {
    Request('/indicators/total-weight').then((response) => {
      response.json().then((data) => {
        setTotalWeight(data[0].total);
      });
    });
  };

  const loadPackages = () => {
    Request('/indicators/total-orders').then((response) => {
      response.json().then((data) => {
        setTotalPackages(data[0].total);
      });
    });
  };

  const loadPackagesByStatus = () => {
    Request('/indicators/total-orders-by-status').then((response) => {
      response.json().then((data) => {
        setTotalPackagesByStatus(data);
      });
    });
  };

  useEffect(() => {
    loadOrders();
    loadTotalWeight();
    loadPackages();
    loadPackagesByStatus();
  }, []);

  const statusToPortuguese = {
    WAITING_TO_BE_SENT: 'Aguardando envio',
    OUT_FOR_DELIVERY: 'Saiu para entrega',
    DELIVERED: 'Entregue'
  };

  return (
    <div className="ViewPackages">
      <div className="indicators">
        <div className='indicator'>
          <span className='indicator-title'>Total Encomendas</span>
          <span className='indicator-value'>{totalPackages}</span>
        </div>
        <div className='indicator'>
          <span className='indicator-title'>Total Peso</span>
          <span className='indicator-value'>{totalWeight}</span>
        </div>
        {totalPackagesByStatus.map((status) => {
          return <div className='indicator'>
            <span className='indicator-title'>{statusToPortuguese[status.status]}</span>
            <span className='indicator-value'>{status.total}</span>
          </div>;
        })}
      </div>
      <div className="container-components">
        <Search />
        <DropdownOrder onClick={loadOrders} />
      </div>
      <div className="order-list">
        <table>
          <thead className="thead-table">
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
                  <UpdatedStatus orderId={orders.id} currentStatus={orders.status} />
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewPackges;