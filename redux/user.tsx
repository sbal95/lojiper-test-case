// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
    user: any
}

const initialState: userState = {
    user : {
    },

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state ,  action: PayloadAction<any>) {
        state.user = action.payload
    }
  },
});

export const { setUserState } = userSlice.actions;

export default userSlice.reducer;
