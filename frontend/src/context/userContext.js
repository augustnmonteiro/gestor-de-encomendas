import React from 'react';

export const UserContext = React.createContext();

export const UserDataContext = ({ children }) => {
    const [listOrders, setListOrders] = React.useState([]);
    const [listOrdersComplet, setListOrdersComplet] = React.useState([]);

  return (
    <UserContext.Provider
      value={{
        listOrders, setListOrders, listOrdersComplet, setListOrdersComplet
      }}
    >
      {children}
    </UserContext.Provider>
  );
}