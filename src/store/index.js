import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../_reducers';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { autoRehydrate } from 'redux-persist';

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk,logger));

const configureStore = () => (
  createStore(
    reducers,
    undefined,
    compose(
      autoRehydrate(),
      applyMiddleware(reduxThunk,logger),
    )
  )
);

export default configureStore;