import { compose } from 'redux';
import withLayout from './tailwindcss/withLayout';
import withDataFetch from './withFetch';
import { connect } from 'react-redux';
import { fetchData } from '../../features/DataFetch/reducer';

export default Component =>
  compose(
    connect(state => state, { onFetchData: fetchData }),
    withDataFetch,
    withLayout
  )(Component);
