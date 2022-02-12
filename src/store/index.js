import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/list';
import addReducer from '../reducers/add';
import filterReducer from '../reducers/filter';

const reducer = combineReducers({
  List: listReducer,
  Add: addReducer,
  Filter: filterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
