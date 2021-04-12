import { configureStore } from '@reduxjs/toolkit';
import authReducer from "store/reducer/authReducer";
import requestReducer from "store/reducer/requestReducer";

export default configureStore({
  reducer: {
    auth: authReducer,
    request: requestReducer,
  }
})
