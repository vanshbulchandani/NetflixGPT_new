import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesreducer from "./MovieSlice";

const Appstore = configureStore({
  reducer: {
    user: userReducer, // ✅ registered reducer
    movies: moviesreducer,
  },
});

export default Appstore;
