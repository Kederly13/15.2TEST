import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import moneyReducer from './bank/reducer';
import counterReducer from './counter/reducer';
import employeesReducer from './employees/reducers';



const rootReducer = combineReducers({
     moneyReducer,
     counterReducer,
     employeesReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    enhancers: [composeWithDevTools(applyMiddleware(thunk))],
  });

export default store;