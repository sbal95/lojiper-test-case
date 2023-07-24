import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userListState {
    userList: any
}

const initialState: userListState = {
    userList : [
        {
        username : "balserhat",
        name : "serhat",
        surname : "bal",
        email : "sbal95@gmail.com",
        sex : "male",
        password : "123456"
        },
        { 
        username : "akinmehmet",
        name : "mehmet",
        surname : "akın",
        email : "m.akin@gmail.com",
        sex : "male",
        password : "121212"
        },
        {
        username : "celikfatma",
        name : "fatma",
        surname : "çelik",
        email : "f.celik@gmail.com",
        sex : "female",
        password : "123456"
        },
        {
        username : "kayaselim",
        name : "selim",
        surname : "kaya",
        email : "s.kaya@gmail.com",
        sex : "male",
        password : "123456"
        },
        {
        username : "demirayse",
        name : "ayşe",
        surname : "demir",
        email : "demir.ayse@gmail.com",
        sex : "female",
        password : "123456",
        birthDay : ""
        },
] 

};

const userSliceList = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUserListState(state ,  action: PayloadAction<any>) {
        state.userList = [...state.userList, action.payload]
    }
  },
});

export const { setUserListState } = userSliceList.actions;

export default userSliceList.reducer;
