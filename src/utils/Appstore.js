import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const Appstore = configureStore({
  reducer: {
    user: userReducer, // ✅ registered reducer
  },
});

export default Appstore;
