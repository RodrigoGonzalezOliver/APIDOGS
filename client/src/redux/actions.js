import axios from "axios";
import { GET_DATA, GET_TEMPERAMENTS, SEARCH_BY_ID, SEARCH_BY_NAME } from "./actions-types";

export const getDogs = () => {
  return async function (dispatch) {
    try {
      
      const response = await axios.get("http://localhost:3001/dogs");
      console.log(response.data)
      dispatch({ type: GET_DATA, payload: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/temperaments");
      dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const searchById = (id) => {
  return async (dispatch) => {
      const response = await axios.get('http://localhost:3001/dogs/' + id);
      dispatch({
          type: SEARCH_BY_ID, payload: response.data,});
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
      try {
          const resultSearch = await axios.get(
              `http://localhost:3001/dogs/dogs/${name ? `?name=${name}` : ''}`
          );
          return dispatch({
              type: SEARCH_BY_NAME,
              payload: resultSearch.data,
          });
      } catch (error) {
          const resultSearch = await axios.get('/breeds');
          return dispatch({
              type: SEARCH_BY_NAME,
              payload: resultSearch.data,
          });
      }

      // console.log(resultSearch.data);
      // console.log(
      //     `/breeds/${name ? `?name=${name}` : ''}`
      // );
  };
};