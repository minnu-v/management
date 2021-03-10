import { configureStore } from '@reduxjs/toolkit';
import authReducer from "store/reducer/authReducer";

export default configureStore({
  reducer: {
    auth: authReducer,
  }
})