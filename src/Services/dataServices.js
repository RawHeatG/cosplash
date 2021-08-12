import axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const API_LOCATION = "https://api.unsplash.com";

export const getCollection = async (collectionId) =>
  axios(
    `${API_LOCATION}/collections/${collectionId}/photos?client_id=${ACCESS_KEY}&per_page=30`
  );

export const getSearchedImages = async (
  searchedKeyword,
  sortBy,
  color,
  orientation
) =>
  await axios(
    `${API_LOCATION}/search/photos?client_id=${ACCESS_KEY}&query=${searchedKeyword}&per_page=30${
      color ? `&color=${color}` : ""
    }${sortBy ? `&order_by=${sortBy}` : ""}${
      orientation ? `&orientation=${orientation}` : ""
    }`
  );
