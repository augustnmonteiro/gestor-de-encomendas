import './update.css'
import { useState } from 'react';
import Request from '../../utilities';

function UpdatedStatus({ orderId, currentStatus,loadOrders}) {

    const [selectedStatus, setSelectedStatus] = useState(currentStatus);

    function updateStatus() {
        const id = orderId;
        const urlComplemento = `${id}`;

        const data = { status: selectedStatus };
        const jsonData = JSON.stringify(data);
        console.log(jsonData)

        let url = '/orders';
        if (urlComplemento) {
          url = '/orders/' + urlComplemento;
        }
        Request(url,  {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: jsonData
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados.');
            }
            return response.json();
        })
        .then(data => {
            loadOrders();
            return console.log(data);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
    };

    return (
        <div>
            <select id="status" name="status" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value="">Selecione o novo status</option>
                <option value="WAITING_TO_BE_SENT">Aguardando envio</option>
                <option value="OUT_FOR_DELIVERY">Saiu para entrega</option>
                <option value="DELIVERED">Entregue</option>
            </select>

            <button onClick={updateStatus}>Atualizar</button>

        </div>
    )
}

export default UpdatedStatus;