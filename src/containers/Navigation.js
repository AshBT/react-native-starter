import { connect } from 'react-redux';
import NavigatorView from '../navigation/Navigation';

export default connect(
  state => ({
    navigatorState: state.navigation,
  }),
)(NavigatorView);
