import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const canUseDom = !(typeof window === 'undefined')

const inititalState = {};

// ======================================================
  // Middleware Configuration
// ======================================================
const middleware = [thunk]

// ======================================================
  // Store Enhancers
// ======================================================
const enhancers = []

let composeEnhancers = compose

if ((process.env.NODE_ENV === 'development') && canUseDom) {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

// const store = createStore(
//   rootReducer, 
//   inititalState, 
//   compose(applyMiddleware(thunk), 
//     window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = createStore(
  rootReducer,
  inititalState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
  )
)

export default store;
