import { useState } from 'react';
import './dropdownOrder.css';

function DropdownOrder(props) {

  const [order, setOrder] = useState('');

  const selectChange = (e) => {
    setOrder(e.target.value);
    props.onClick(e.target.value);
  };

  return (
    <div className="dropdown">
        <br />
        <select className="select-drop" value={order} onChange={selectChange}>
          <option>⇅</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
    </div>
  );
}

export default DropdownOrder;
