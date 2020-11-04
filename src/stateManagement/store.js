import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
   blacklist: ['productState'],
   whitelist: ['categoryState','counterState']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunk, createLogger()];

//const store = createStore(
//    rootReducer,
//  applyMiddleware(...middlewares)
//);



  export const store = createStore(persistedReducer,applyMiddleware(...middlewares))
  export const persistor = persistStore(store)
