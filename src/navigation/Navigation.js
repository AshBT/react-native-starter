import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './RootNavigation';

export default function NavigatorView({ dispatch, navigatorState }) {
  return (
    <AppNavigator
      navigation={
        addNavigationHelpers({
          dispatch,
          state: navigatorState,
        })
      }
    />
  );
}

NavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigatorState: PropTypes.shape({}).isRequired,
};
