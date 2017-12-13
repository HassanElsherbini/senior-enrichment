import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
//import createMigration from 'redux-persist-migrate';

import campusesReducer from './reducers/campusesReducer';

import studentsReducer from './reducers/studentsReducer';


const config = {
  key: 'root',
  storage
};

const mainReducer = persistCombineReducers(config, { campuses: campusesReducer,
  students: studentsReducer});


export let store = createStore(mainReducer, applyMiddleware(thunkMiddleware, loggingMiddleware));
export let persistor = persistStore(store);

export * from './reducers/campusesReducer';
export * from './reducers/studentsReducer';
