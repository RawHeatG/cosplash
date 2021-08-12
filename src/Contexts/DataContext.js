import { createContext, useContext, useEffect, useState } from "react";
import { getCollection } from "../Services/unsplashServices";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await getCollection(2423569);
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <DataContext.Provider value={{ images, setImages }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
