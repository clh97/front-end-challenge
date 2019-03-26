import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';

const initialState = {
  products: []
}

const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

function bagReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      state.products.push(action.payload.product);
      return state;

    case REMOVE_PRODUCT:
      const index = state.products.findIndex(p => p.id == action.payload.id)
      state.products.splice(index, 1);
      return state;
    break;

    default:
      return state;
  }
}

const persistConfig = {
  key: 'bag',
  storage,
}

const persistedReducer = persistReducer(persistConfig, bagReducer)

const enhancers = [
  applyMiddleware(thunk)
]

let store = createStore(persistedReducer, compose(enhancers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store)

export function addToCart(product) {
  store.dispatch({
    type: ADD_PRODUCT,
    payload: {
      product
    }
  })
}

export default {
  store,
  persistor
}