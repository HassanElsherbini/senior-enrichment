// import { REHYDRATE } from 'redux-persist';

// const GOT_CAMPUS = 'GOT_CAMPUS';

// const gotCampus = function(selectedCampus){
//   const action = {type: GOT_CAMPUS, selectedCampus};
//   return action;
// };

// export const changeCampusSelection = function(campus){
//   return function(dispatch){
//     dispatch(gotCampus(campus));
//   };
// };

// const reducer = function(state = {}, action){
//   switch (action.type){
//     case REHYDRATE:
//       return action.selectedCampus || {};
//     case GOT_CAMPUS:
//       return action.selectedCampus;
//     default:
//       return state;
//   }
// };

// export default reducer;

