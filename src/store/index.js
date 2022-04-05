import { configureStore } from '@reduxjs/toolkit';
import userListReducer from './slice/userList';
import resultReducer from './slice/result';

export default configureStore({
  reducer: {
    userList: userListReducer,
    result: resultReducer,
  },
});
