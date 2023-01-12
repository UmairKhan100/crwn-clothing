import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.util";

export const CategoriesContext = createContext();
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const map = await getCategoriesAndDocuments();
      setCategoriesMap(map);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
