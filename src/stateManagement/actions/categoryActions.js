import {
  CATEGORY_ERROR_FETCH,
  CATEGORY_GET_ALL_WITH_API,
  CATEGORY_START_FETCH,
  CATEGORY_SUCCESS_FETCH
} from "./actionTypes";

export const getCategoriesFromAPI = async dispatch => {
  dispatch(startFetchCategories());

  try {
    const apiUrl = "http://apitester.ir/api/Categories";
    let response = await fetch(apiUrl);
    let data = await response.json();
    return {
      type: CATEGORY_SUCCESS_FETCH,
      payload: data
    };
  } catch(error) {
    return {
      type: CATEGORY_ERROR_FETCH,
      payload: error.message
    };
  }
};

export const startFetchCategories = () => {
  return {
    type: CATEGORY_START_FETCH
  };
};

export const errorFetchCategories =(error) => {
  return {
    type: CATEGORY_ERROR_FETCH,
    payload: error
  };
};
