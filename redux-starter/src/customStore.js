import reducer from './reducer';

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  function getState() {
    return state;
  }

  return { dispatch, getState, subscribe };
}

export default createStore(reducer);
