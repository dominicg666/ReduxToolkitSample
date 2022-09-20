import { configureStore, combineReducers } from '@reduxjs/toolkit'
import appSlice from './reducers/app'
const reducer = combineReducers({
  app: appSlice.reducer
});

// 

const store = configureStore({
  reducer
})
store.subscribe(() => console.log(store.getState()))


export default store;