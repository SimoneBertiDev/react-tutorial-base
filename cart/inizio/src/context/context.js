import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
} from "./actions";
import axios from "axios";
const url = "https://react-corso-api.netlify.app/.netlify/functions/cartshop";

const AppContext = React.createContext();

const intialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};
// AppContext.Provider

const AppProvider = ({ children }) => {
  //utilizzo useReducer con state iniziale
  const [state, dispatch] = useReducer(reducer, intialState);

  //Data Fetching
  useEffect(() => {
    //IIFE
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({
          type: DATA_FETCHING_SUCCESS,
          payload: response.data.default,
        });
      } catch (error) {
        dispatch({ type: DATA_FETCHING_FAIL });
      }
    })();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
