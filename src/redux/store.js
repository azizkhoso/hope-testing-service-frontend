import { combineReducers, createStore } from 'redux';

import account from './reducers/account';

const rootReducer = combineReducers({
  account,
});

const store = createStore(rootReducer);

export default store;
