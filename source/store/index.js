import { call, takeLatest } from 'redux-saga/effects';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../shared/sagas';
import { reducer as dataFetchReducer } from '../features/DataFetch/reducer';

const reducer = (state = {}, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  root: reducer,
  dataState: dataFetchReducer
});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// function* rootSaga() {
//   try {
//     call(console.log, 'running root saga!');
//   } catch (e) {
//     console.log(`Error! ::${e}`);
//   }
// }

const defaultState = rootReducer();

// export default BaseComponent => {
//   nextReduxWrapper(configureStore)(nextReduxSaga(BaseComponent));
// };

function configureStore(initialState = defaultState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([logger, sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
