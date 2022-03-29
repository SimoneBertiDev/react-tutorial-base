import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
} from "./actions";

const reducer = (state, {type, payload}) => {
  if(type === DATA_FETCHING_STARTED) {
    return {...state , isLoading: false}
  }
    return state;
};

export default reducer;
