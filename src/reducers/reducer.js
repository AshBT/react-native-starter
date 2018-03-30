// @flow
import { combineReducers } from 'redux';
import NavigationStateReducer from './navigation';
import CalendarReducer from './calendar';
import GridReducer from './grid';
// ## Generator Reducer Imports
import AuthReducer from './auth';

export default combineReducers({
  navigation: NavigationStateReducer,
  calendar: CalendarReducer,
  grid: GridReducer,
  // ## Generator Reducers

  auth: AuthReducer,
});
