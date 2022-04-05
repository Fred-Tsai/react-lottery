import { createSlice } from '@reduxjs/toolkit';

export const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = userListSlice.actions;

export const selectUserList = (state) => state.userList;

export default userListSlice.reducer;
