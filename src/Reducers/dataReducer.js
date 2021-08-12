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
    case "FILTER":
      return {
        ...state,
        filterBy: payload,
      };
    case "RESET_FILTERS":
      return {
        ...state,
        sortBy: null,
        filterBy: null,
      };

    default:
      console.error("Error occured in reducer");
  }
};
