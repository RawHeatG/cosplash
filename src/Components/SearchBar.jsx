import { useState } from "react";
import { useData } from "../Contexts";
import { getSearchedImages } from "../Services/dataServices";

export const SearchBar = () => {
  const [searchKeyword, setSearchedKeyword] = useState();
  const { dispatch, sortBy, filterBy } = useData();

  //   const debouncedFetch = (event) => {
  //     console.log(event.target.value);
  //     // eslint-disable-next-line no-use-before-define
  //     clearTimeout(timerId);
  //     var timerId = setTimeout(() => {
  //       (async function () {
  //         try {
  //           const response = await getSearchedImages(event.target.value);
  //           console.log(event.target.vaule);
  //           console.log(response);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       })(event);
  //     }, 2000);
  //   };

  const getImages = async () => {
    try {
      const response = await getSearchedImages(searchKeyword, sortBy, filterBy);
      dispatch({ type: "SET_IMAGES", payload: response.data.results });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-3/4 flex">
      <input
        value={searchKeyword}
        className="w-full h-full rounded-xl bg-gray-200 py-2 px-4"
        placeholder="Search"
        onChange={(event) => setSearchedKeyword(event.target.value)}
      />
      <button onClick={getImages}>Search</button>
    </div>
  );
};
