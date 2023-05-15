import './update.css'
import { useState, useEffect } from 'react';

function UpdatedStatus({ orderId, currentStatus }) {

    const [selectedStatus, setSelectedStatus] = useState(currentStatus);

    function updateStatus() {
        const id = orderId;
        const url = `http://localhost:3001/orders/${id}`;

        const data = { status: selectedStatus };
        const jsonData = JSON.stringify(data);
        console.log(jsonData)

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: jsonData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar os dados.');
                }
                return response.json();
            })
            .then(data => {
                return console.log(data);
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
            });
    };
    //ATULIZA A PAGINA
    function reload() {
        window.location.reload();
    }
    // FUNÇÃO PARA EXECULTAR  AS 2 FUNÇÕES
    function double(a, b) {
        updateStatus()
        reload();
    }
    return (
        <div>
            <select id="status" name="status" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value="">Selecione o novo status</option>
                <option value="WAITING_TO_BE_SENT">Aguardando envio</option>
                <option value="OUT_FOR_DELIVERY">Saiu para entrega</option>
                <option value="DELIVERED">Entregue</option>
            </select>

            <button onClick={double}>Atualizar</button>

        </div>
    )
}

export default UpdatedStatus;