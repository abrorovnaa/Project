import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [itemProductId, setItemsProductId] = useState(0);

  const value = {
    itemProductId, setItemsProductId
   
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
