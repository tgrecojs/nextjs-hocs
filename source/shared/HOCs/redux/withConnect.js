import { connect } from 'react-redux';
import { fetchData } from '../../../features/DataFetch/reducer';

export default Component =>
  connect(state => state, { onFetchData: fetchData })(Component);
