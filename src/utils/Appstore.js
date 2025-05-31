import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesreducer from "./MovieSlice";
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";

const Appstore = configureStore({
  reducer: {
    user: userReducer, // ✅ registered reducer
    movies: moviesreducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default Appstore;
