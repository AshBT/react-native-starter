// @flow
import { NavigationActions } from 'react-navigation';
import includes from 'lodash/includes';

import type { StateType, ActionType } from '../reducer';

import AppNavigator from '../../navigation/RootNavigation';

export default function NavigatorReducer(state: StateType, action: ActionType): StateType {
  // Initial state
  if (!state) {
    return AppNavigator.router.getStateForAction(action, state);
  }

  // Is this a navigation action that we should act upon?
  if (includes(NavigationActions, action.type)) {
    return AppNavigator.router.getStateForAction(action, state);
  }

  return state;
}
