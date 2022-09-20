import { configureStore } from '@reduxjs/toolkit'
import appSlice from './reducers/app'


store.subscribe(() => console.log(store.getState()))


const store = configureStore({
  app: appSlice.reducer
})

export default store;