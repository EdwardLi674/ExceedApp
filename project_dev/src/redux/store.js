import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import appSettingReducer from "./appsettingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appsetting: appSettingReducer,
  },
});
