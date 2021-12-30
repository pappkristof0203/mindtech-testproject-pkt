import axios from "axios";

export const SAVE_DATA = "SAVE_DATA";
export const SAVE_FILTER_DATA = "SAVE_FILTER_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const CLEAR_FILTER_DATA = "CLEAR_FILTER_DATA";

export const fetchData = () => {
  return async (dispatch) => {
    const data = await axios.get(
      "https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1&token=4sn38aTqdvLb9gCZfjy2Gwudj"
    );

    dispatch({
      type: SAVE_DATA,
      data: data.data,
    });
  };
};

export const uploadFilterData = (filterData) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_FILTER_DATA,
      filterData: filterData,
    });
  };
};

export const clearData = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DATA,
    });
  };
};

export const clearFilterData = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_FILTER_DATA,
    });
  };
};
