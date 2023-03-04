import store from './store';
import * as actions from './actions';

store.subscribe(() => {
  console.log('store changed');
});
store.dispatch(actions.bugAdded('helldsfo new bug'));
store.dispatch(actions.bugAdded('helldsfo new 2bug'));
store.dispatch(actions.bugAdded('helldsfo new 3bug'));
store.dispatch(actions.bugResolved(1));

// store.state = 1;
console.log(store.getState());

// import store from './store';
// import { bugAdded, bugRemoved, bugResolved } from './actions';

// const unsubscribe = store.subscribe(() => {
//   console.log('Store changed!', store.getState());
// });
// store.dispatch(bugAdded('bug 2'));
// store.dispatch(bugResolved(1));
// // unsubscribe();
// // store.dispatch(bugRemoved);
// console.log(store.getState());
