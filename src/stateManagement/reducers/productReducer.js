import {
  PRODUCT_ADD,
  PRODUCT_REMOVE,
  PRODUCT_LIST
} from "../actions/actionTypes";
const initialState = {
  items: [{id:1, title:'mask marghob baraye corona'}],
  isLoading:true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST: {
      return {
        ...state,
        isLoading:false,
      };
    }
    case PRODUCT_REMOVE:{
      return {
        ...state,
        items:state.items.filter(q => q.id != action.payload)
      }
    }
    case PRODUCT_ADD:{
      return {
        ...state,
        items:state.items.concat(action.payload)
      }
    }
    default:{
      return state;
    }
  }
};
export default productReducer;
