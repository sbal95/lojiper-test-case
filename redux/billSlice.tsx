// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface billState {
    bill: any
}

const initialState: billState = {
    bill : {
        selectedSeats : [],
        price : 0
    },

};

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    setBillState(state ,  action: PayloadAction<any>) {
        state.bill = action.payload
    }
  },
});

export const { setBillState } = billSlice.actions;

export default billSlice.reducer;
