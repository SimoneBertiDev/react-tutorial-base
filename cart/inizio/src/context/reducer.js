import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
  SVUOTA_CARRELLO,
  DELETE_ITEM,
  AUMENTA_QUTY,
  DIMINUISCI_QUTY,
  COSTO_TOTALE,
  CONTATORE,
} from "./actions";

const reducer = (state, { type, payload }) => {
  if (type === DATA_FETCHING_STARTED) {
    return { ...state, isLoading: false };
  } else if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      products: payload.map((el) => {
        return { ...el, qty: 1 };
      }),
    };
  } else if (type === DATA_FETCHING_FAIL) {
    return { ...state, isLoading: false, isError: false };
  }
  if (type === SVUOTA_CARRELLO) {
    return { ...state, products: [] };
  }
  if (type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== payload),
    };
  }
  if (type === AUMENTA_QUTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (payload === el._id) {
          return { ...el, qty: el.qty + 1 };
        }
        return { ...el };
      }),
    };
  }
  if (type === DIMINUISCI_QUTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (payload === el._id) {
          return { ...el, qty: el.qty - 1 };
        }
        return { ...el };
      }),
    };
  }
  if (type === COSTO_TOTALE) {
    return {
      ...state,
      // totale:state.products.riduce((total, item, index,arrya))
      total: state.products.reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0),
    };
  }
  if (type === CONTATORE) {
    return {
      ...state,
      // totale:state.products.riduce((total, item, index,arrya))
      itemCounter: state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }
  return state;
};

export default reducer;
