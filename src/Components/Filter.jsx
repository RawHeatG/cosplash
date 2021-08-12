import { useState } from "react";
import { useData } from "../Contexts";

export const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { sortBy, filterBy, dispatch } = useData();
  return (
    <div>
      <button
        onClick={() => setShowFilters((prevValue) => !prevValue)}
        className="p-4 rounded-full"
      >
        Filters
      </button>
      {showFilters && (
        <div className="flex justify-between bg-gray-200 rounded-xl p-6">
          <form className="flex space-x-20 px-6">
            <fieldset className="flex flex-col space-">
              <legend>Sort By</legend>
              <div>
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "relevant" })
                  }
                  checked={sortBy && sortBy === "relevant"}
                />{" "}
                Relevance
              </div>
              <div>
                <input
                  type="radio"
                  name="sort"
                  onChange={() => dispatch({ type: "SORT", payload: "latest" })}
                  checked={sortBy && sortBy === "latest"}
                />{" "}
                Newest First
              </div>
            </fieldset>

            <fieldset className="flex flex-col">
              <legend>Filter By</legend>
              <div>
                <input
                  type="radio"
                  name="filter"
                  onChange={() =>
                    dispatch({ type: "FILTER", payload: "black_and_white" })
                  }
                  checked={filterBy && filterBy === "black_and_white"}
                />{" "}
                B&W
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  onChange={() =>
                    dispatch({ type: "FILTER", payload: "black_and_white" })
                  }
                  checked={filterBy === null}
                />{" "}
                Any Color
              </div>
            </fieldset>
          </form>
          <div className="mt-auto">
            <button
              className="px-4 py-2 rounded-xl bg-white "
              onClick={() => {
                dispatch({ type: "RESET_FILTERS" });
                setShowFilters(false);
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
