import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColumnsType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface TableType {
  columns: Array<ColumnsType>
  data: Array<Object>
}

const initialState: TableType = {
  columns: [],
  data: []
}

export const tableSlice = createSlice({
  name: 'table',
  initialState: initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<Array<ColumnsType>>) => {
      state.columns = action.payload
    },
    setData: (state, action: PayloadAction<Array<Object>>) => {
      state.data = action.payload
    }
  }
})

export const selectColumns = (state: any) => state.table.columns

export const selectTableData = (state: any) => state.table.data

export const { setData } = tableSlice.actions

export default tableSlice.reducer