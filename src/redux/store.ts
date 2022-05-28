import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
