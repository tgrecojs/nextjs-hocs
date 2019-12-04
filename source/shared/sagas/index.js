import { fork, all, call, takeLatest, put } from 'redux-saga/effects';
import {
  fetchData,
  reportFetchDataSuccess,
  reportFetchDataFailure,
  handleFetchDataSuccess,
  handleFetchDataFailure
} from '../../features/DataFetch/reducer';
import { altFetch as fetchStockData } from '../API';

function* fetchDataSaga() {
  try {
    const data = yield call(fetchStockData);
    console.log('data ## after yield ####', data);
    yield put(reportFetchDataSuccess());
    yield put(handleFetchDataSuccess(data['Weekly Time Series']));
  } catch (e) {
    yield put(reportFetchDataFailure(e));
    yield put(handleFetchDataFailure());
  }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchData().type, fetchDataSaga);
}

export default function* root() {
  yield call(fetchDataWatcher);
}
