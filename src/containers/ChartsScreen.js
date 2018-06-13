import { connect } from 'react-redux';
import { compose, withState } from 'recompose';

import { loadItems } from '../reducers/charts';

import ChartsScreen from '../screens/ChartsScreen';

export default compose(
  connect(
    state => ({
    }),
    dispatch => ({
    }),
  )
)(ChartsScreen);