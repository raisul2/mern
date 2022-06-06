import { configureStore} from '@reduxjs/toolkit'
import {apiSlice} from './rtk'
import { expenseSlice } from './reducer'
export const store = configureStore({
    reducer:{
      expence: expenseSlice,
      [apiSlice.reducerPath]:apiSlice.reducer
    },

    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})