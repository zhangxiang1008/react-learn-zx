import { configureStore } from "@reduxjs/toolkit"
import dashReducer from '../views/Dashboard/dashSlice'
import tableReducer from '../views/Tables/tableSlice'
export const store = configureStore({
  reducer: {
    dashboard: dashReducer,
    table: tableReducer
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>