// const START_ITEMS_LOADING = 'ChartsState/START_ITEMS_LOADING';
// const ITEMS_LOADED = 'ChartsState/ITEMS_LOADED';
// const LOADING_FAILED = 'ChartsState/LOADING_FAILED';
//
// // const initialState = {
// //   items: [],
// //   isLoading: false
// // };
//
// function startItemsLoading() {
//   return {
//     type: START_ITEMS_LOADING
//   };
// }
//
// function itemsLoaded(items) {
//   return {
//     type: ITEMS_LOADED,
//     items,
//   };
// }
//
// function itemsLoadingFailed() {
//   return {
//     type: LOADING_FAILED,
//   };
// }
//
// export function loadItems() {
//   return (dispatch, getState) => {
//     const items = [{id: 1, data: '111'}, {id: 2, data: '222'},{id: 3, data: '333'}];
//     dispatch(itemsLoaded(items));
//   }
// }
//
//
// export default function ChartsStateReducer(state = initialState, action) {
//   switch (action.type) {
//     case START_ITEMS_LOADING:
//       return Object.assign({}, state, {
//         isLoading: true
//       });
//     case ITEMS_LOADED:
//       return Object.assign({}, state, {
//         isLoading: false,
//         items: action.items
//       });
//     default:
//       return state;
//   }
// }
//
