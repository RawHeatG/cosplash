import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../Reducers/dataReducer";
import { getCollection } from "../Services/dataServices";

const DataContext = createContext();

const initialState = {
  sortBy: null,
  color: null,
  orientation: null,
  searchKeyword: null,
  images: [],
};

export const DataProvider = ({ children }) => {
  const [{ sortBy, color, images, orientation, searchKeyword }, dispatch] =
    useReducer(dataReducer, initialState);
  useEffect(() => {
    (async function () {
      try {
        const response = await getCollection(2423569);
        dispatch({ type: "SET_IMAGES", payload: response.data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <DataContext.Provider
      value={{ sortBy, color, images, orientation, searchKeyword, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
