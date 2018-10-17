import { auth } from './redux/modules/auth/reducers';

/* Redux */
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

/* React Router */
import { hashHistory, browserHistory } from 'react-router';
/* Reducers */
import { logger } from 'redux-logger';

// const reducers = require('./reducers');
import thunk from 'redux-thunk';
/* App configs */
import config from './config';

/* Combine Reducers */
const reducer = combineReducers({
  routing: routerReducer,
  auth,
});

/* Initial the store */
function configureStore({}) {
  const createdStore =
    process.env.NODE_ENV === 'production'
      ? createStore(reducer, initialState, compose(applyMiddleware(thunk)))
      : createStore(
          reducer,
          initialState,
          compose(applyMiddleware(thunk, logger))
        );

  // @ts-ignore
  const { hot } = module;
  if (hot) {
    hot.accept('./reducers', () => {
      const nextReducer = combineReducers({
        routing: routerReducer,
        auth,
      });
      createdStore.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}

/* Possible persistent redux state thought localStorage. Just remove false and uncomment store.subscribe */
const initialState =
  false && localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') || '')
    : {};

export const store = configureStore(initialState);

/* Uncomment this for persistent redux state */
// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });

/* Initial history */
let routerHistory;
if (config.historyBackend === 'browserHistory') {
  routerHistory = browserHistory;
} else {
  routerHistory = hashHistory;
}
export const history = syncHistoryWithStore(routerHistory, store);
