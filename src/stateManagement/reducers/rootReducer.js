import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  counterState: counterReducer,
  productState: productReducer,
  categoryState:categoryReducer,
});

export default rootReducer;
