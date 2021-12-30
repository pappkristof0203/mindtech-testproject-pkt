import {
  SAVE_DATA,
  SAVE_FILTER_DATA,
  CLEAR_DATA,
  CLEAR_FILTER_DATA,
} from "../actions/data";

const initialState = {
  data: [],
  filterData: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SAVE_FILTER_DATA:
      return {
        ...state,
        filterData: action.filterData,
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: [],
      };
    case CLEAR_FILTER_DATA:
      return {
        ...state,
        filterData: [],
      };
    default:
      return state;
  }
};

export default dataReducer;
