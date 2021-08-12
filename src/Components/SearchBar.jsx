import { useState } from "react";
import { useData } from "../Contexts";
import { getSearchedImages } from "../Services/dataServices";
import { Filter } from "./Filter";

export const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState();
  const [showFilters, setShowFilters] = useState(false);
  const { dispatch, sortBy, color, orientation } = useData();

  const debounce = (func) => {
    let timer;
    return function () {
      const context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const getImages = async (searchKeyword, sortBy, color, orientation) => {
    try {
      const response = await getSearchedImages(
        searchKeyword,
        sortBy,
        color,
        orientation
      );
      dispatch({ type: "SET_IMAGES", payload: response.data.results });
    } catch (error) {
      console.error(error);
    }
  };

  const optimizedGetImages = debounce(getImages);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div className="w-full sm:w-3/4 flex space-x-6 items-center">
          <input
            className="w-full h-full rounded-xl bg-gray-200 py-2 px-4"
            placeholder="Search"
            onChange={(event) => {
              setSearchKeyword(event.target.value);
              optimizedGetImages(
                event.target.value,
                sortBy,
                color,
                orientation
              );
            }}
          />
          <button
            onClick={() =>
              optimizedGetImages(searchKeyword, sortBy, color, orientation)
            }
          >
            <svg
              className="w-10 h-10 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div>
          <button onClick={() => setShowFilters((prevValue) => !prevValue)}>
            <svg
              className="w-10 h-10 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
        </div>
      </div>
      {showFilters && (
        <Filter showFilters={showFilters} setShowFilters={setShowFilters} />
      )}
    </div>
  );
};
