import dsm from 'redux-dsm';

const IDLE = 'idle';
const FETCHING = 'fetching';
const ERROR = 'error';
const SUCCESS = 'success';

const actionStates = [
  'initial',
  IDLE,
  [
    'fetch data',
    FETCHING,
    ['report fetch data failure', ERROR, ['handle fetch data failure', IDLE]],
    ['report fetch data success', SUCCESS, ['handle fetch data success', IDLE]]
  ]
];

const FetchDSM = dsm({
  component: 'data-fetching',
  description: 'retrieve data on page load',
  actionStates
});

const { reducer, actionCreators } = FetchDSM;

const {
  fetchData,
  reportFetchDataFailure,
  reportFetchDataSuccess,
  handleFetchDataSuccess,
  handleFetchDataFailure
} = actionCreators;

export {
  reducer,
  actionCreators,
  fetchData,
  reportFetchDataSuccess,
  reportFetchDataFailure,
  handleFetchDataSuccess,
  handleFetchDataFailure
};
