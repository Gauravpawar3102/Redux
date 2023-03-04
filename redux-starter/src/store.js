import { createStore } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';

// const middleware = thunk;
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
