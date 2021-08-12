import axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const API_LOCATION = "https://api.unsplash.com/";

export const getCollection = async (collectionId) =>
  axios(
    `${API_LOCATION}collections/${collectionId}/photos?client_id=${ACCESS_KEY}`
  );
