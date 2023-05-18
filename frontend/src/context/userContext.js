import React from 'react';

export const UserContext = React.createContext();

export const UserDataContext = ({ children }) => {
    const [listOrders, setListOrders] = React.useState([]);

  return (
    <UserContext.Provider
      value={{
        listOrders, setListOrders
      }}
    >
      {children}
    </UserContext.Provider>
  );
}