// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TripsState {
    trips: any
}

const initialState: TripsState = {
    trips : [],

};

const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTripState(state ,  action: PayloadAction<any>) {
        state.trips = action.payload
    }
  },
});

export const { setTripState } = tripSlice.actions;

export default tripSlice.reducer;
