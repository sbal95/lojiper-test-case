import { configureStore } from '@reduxjs/toolkit';
import tripSlice from './tripSlice';
import userSlice from './user'
import billSlice from './billSlice';
import userListState from './userList';

const store = configureStore({
  reducer: {
    tripState : tripSlice,
    userState : userSlice,
    billState : billSlice,
    userListState : userListState,
  },
});

export default store;
