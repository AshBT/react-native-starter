import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import moment from 'moment';

import * as AuthStateActions from '../reducers/auth';
import PagesScreen from '../screens/PagesScreen';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
    }),
  ),
)(PagesScreen);
