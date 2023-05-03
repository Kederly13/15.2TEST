import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import moneyReducer from './bank/reducer';
import counterReducer from './counter/reducer';

const rootReducer = combineReducers({
    money: moneyReducer,
    counter: counterReducer,
  });

export default rootReducer;