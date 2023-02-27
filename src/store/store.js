import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import homeSlice from "./homeSlice";
import { getApiConfiguration, getGenres } from "./homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
