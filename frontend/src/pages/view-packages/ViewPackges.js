import './ViewPackages.css';
import UpdatedStatus from '../../components/updateStatus/update';
import React, { useState, useEffect } from 'react';
import DropdownOrder from "../../components/dropdown-order/dropdownOrder";
import Request from "../../utilities";
import Search from '../../componenteSearch/componentSearch';
import { UserContext } from '../../context/userContext';


function ViewPackges() {

  const { listOrders, setListOrders } = React.useContext(UserContext);

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
      <Search />
      <DropdownOrder onClick={loadOrders} />
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
               <UpdatedStatus orderId={orders.id} currentStatus={orders.status}/>
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