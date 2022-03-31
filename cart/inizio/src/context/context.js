import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
  DELETE_ITEM,
  SVUOTA_CARRELLO,
  AUMENTA_QUTY,
  DIMINUISCI_QUTY,
  COSTO_TOTALE,
  CONTATORE
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
  //Cancella un singolo elemento
  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  };
  //suota il carello
  const deleteAll = () => {
    dispatch({ type: SVUOTA_CARRELLO });
  };

  const addQty = (_id) => {
    return dispatch({ type: AUMENTA_QUTY, payload: _id });
  };

  const dimQty = (_id) => {
    return dispatch({ type: DIMINUISCI_QUTY, payload: _id });
  };

  //aggiorna costo totale e numero e lementi
  useEffect(()=>{
    dispatch({type:COSTO_TOTALE})
    dispatch({type:CONTATORE})
  },[state.products])


  //Data Fetching
  useEffect(() => {
    //IIFE
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        // console.log(response.data.default)
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
    <AppContext.Provider value={{ ...state, deleteItem, deleteAll, addQty, dimQty }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
