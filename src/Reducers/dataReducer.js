export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: payload,
      };
    case "SORT":
      return {
        ...state,
        sortBy: payload,
      };
    case "COLOR":
      return {
        ...state,
        color: payload,
      };
    case "ORIENTATION":
      return {
        ...state,
        orientation: payload,
      };
    case "SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: payload,
      };

    case "RESET_FILTERS":
      return {
        ...state,
        sortBy: null,
        color: null,
        orientation: null,
      };

    default:
      console.error("Error occured in reducer");
  }
};
