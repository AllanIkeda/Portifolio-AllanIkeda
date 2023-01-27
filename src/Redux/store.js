import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './Reducer/reducer';

const rootReducer = combineReducers({ reducer: reducer })

const store = createStore(rootReducer, composeWithDevTools());

export default store;
