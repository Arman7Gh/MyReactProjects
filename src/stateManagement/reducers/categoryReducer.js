import {
 CATEGORY_ERROR_FETCH,
 CATEGORY_START_FETCH,
 CATEGORY_SUCCESS_FETCH,
} from "../actions/actionTypes";
const initialState = {
  items: [],
  isLoading:false,
  error:null
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_START_FETCH: {
      return {
        ...state,
        isLoading:true,
      };
    }
    case CATEGORY_SUCCESS_FETCH:{
      return {
        ...state,
       isLoading:false,
       items:action.payload
      }
    }
    case CATEGORY_ERROR_FETCH:{
      return {
        ...state,
        items:[],
        isLoading:false,
        error:action.payload
      }
    }
    default:{
      return state;
    }
  }
};
export default categoryReducer;
