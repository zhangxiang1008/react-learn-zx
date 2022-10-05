import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../../store/index'
interface DashState {
  value: number
}
const initialState: DashState = {
  value: 0
}
export const dashSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase('posts/fetchPosts/pending', () => {
      console.log('pending...........')
    })
    builder.addCase('posts/fetchPosts/fulfilled', () => {
      console.log('fulfilled111111111...........')
    })
    // builder.addCase(fetchPosts.fulfilled, () => {
    //   console.log('fulfilled...........')
    // })
  }
})

export const { increment, incrementByAmount } = dashSlice.actions

export const incrementByAmountAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 2000)
}
export const thunkSendMessage =
  (number: number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
      setTimeout(() => {
        dispatch(incrementByAmount(number))
      }, 2000)
    }
export const selectCountValue = (state: any) => state.dashboard.value
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  // const response = await client.get('/fakeApi/posts')
  // return response.data
})
export default dashSlice.reducer