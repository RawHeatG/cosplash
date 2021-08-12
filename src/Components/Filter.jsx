import { useData } from "../Contexts";

export const Filter = ({ showFilters, setShowFilters }) => {
  const { sortBy, color, orientation, dispatch } = useData();
  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap justify-between bg-gray-200 rounded-xl p-6">
          <form className="flex space-x-0 sm:space-x-20 px-6 flex-wrap">
            <fieldset className="flex flex-col p-2">
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

            <fieldset className="flex flex-col p-2">
              <legend>Color</legend>
              <div>
                <div>
                  <input
                    type="radio"
                    name="color"
                    onChange={() => dispatch({ type: "COLOR", payload: null })}
                    checked={color === null}
                  />{" "}
                  Any Color
                </div>
                <input
                  type="radio"
                  name="color"
                  onChange={() =>
                    dispatch({ type: "COLOR", payload: "black_and_white" })
                  }
                  checked={color && color === "black_and_white"}
                />{" "}
                B&W
              </div>
            </fieldset>
            <fieldset className="flex flex-col p-2">
              <legend>Orientation</legend>
              <div className="flex flex-wrap">
                <div className="pr-4 flex flex-col">
                  <div>
                    <input
                      type="radio"
                      name="orientation"
                      onChange={() =>
                        dispatch({
                          type: "ORIENTATION",
                          payload: null,
                        })
                      }
                      checked={orientation === null}
                    />{" "}
                    Any
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="orientation"
                      onChange={() =>
                        dispatch({
                          type: "ORIENTATION",
                          payload: "landscape",
                        })
                      }
                      checked={orientation && orientation === "landscape"}
                    />{" "}
                    Landscape
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="radio"
                      name="orientation"
                      onChange={() =>
                        dispatch({
                          type: "ORIENTATION",
                          payload: "portrait",
                        })
                      }
                      checked={orientation && orientation === "portrait"}
                    />{" "}
                    Portrait
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="orientation"
                      onChange={() =>
                        dispatch({
                          type: "ORIENTATION",
                          payload: "squarish",
                        })
                      }
                      checked={orientation && orientation === "squarish"}
                    />{" "}
                    Squarish
                  </div>
                </div>
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
