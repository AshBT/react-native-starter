// @flow
import { combineReducers } from 'redux';
import NavigationStateReducer from './navigation';
import CalendarReducer from './calendar';
import GridReducer from './grid';

export default combineReducers({
  navigation: NavigationStateReducer,
  calendar: CalendarReducer,
  grid: GridReducer,
});
