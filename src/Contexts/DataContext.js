import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../Reducers/dataReducer";
import { getCollection } from "../Services/dataServices";

const DataContext = createContext();

const initialState = {
  sortBy: null,
  filterBy: null,
  images: [],
};

export const DataProvider = ({ children }) => {
  const [{ sortBy, filterBy, images }, dispatch] = useReducer(
    dataReducer,
    initialState
  );
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
    <DataContext.Provider value={{ sortBy, filterBy, images, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
