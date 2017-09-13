import {auth} from './redux/modules/auth/reducers';

declare var window: any;

/* Redux */
import {routerReducer, syncHistoryWithStore} from 'react-router-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';

/* React Router */
import * as reactRouter from 'react-router';
import * as ReduxPromise from 'redux-promise';
/* Reducers */
import {createLogger} from 'redux-logger';

// const reducers = require('./reducers');
import thunk from 'redux-thunk';
/* App configs */
import config from './config';

/* Combine Reducers */
const reducer = combineReducers({
  routing: routerReducer,
  auth,
});

const logger = createLogger({
  // ...options
});

/* Initial the store */
function configureStore(initialState: any): any {
  // Initial the redux devtools for Chrome
  // https://github.com/zalmoxisus/redux-devtools-extension/
  const createdStore = createStore(reducer, initialState,
    compose(
      applyMiddleware(logger, ReduxPromise, thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f: any) => f)
  );

  const {hot} = module as any;
  if (hot) {
    hot.accept('./reducers', () => {
      const auth = require('./redux/modules/auth/reducers');
      const nextReducer = combineReducers({
        routing: routerReducer,
        auth,
      });
      createdStore.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}

// Default saves and read saved redux state from local storage
const initialState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

export const store = configureStore(initialState);
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
/* Initial history */
let routerHistory: any;
if (config.historyBackend === 'browserHistory') {
  routerHistory = reactRouter.browserHistory;
} else {
  routerHistory = reactRouter.hashHistory;
}
export const history = syncHistoryWithStore(routerHistory, store);
