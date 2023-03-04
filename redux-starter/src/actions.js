import * as actions from './actionTypes';

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
}
export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  };
}

// export function bugRemoved(id) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: {
//       id: 1,
//     },
//   };
// }
