import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../slice/homeSlice";

export default configureStore({
  reducer: {
    rocketsData: homeSlice,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: false,
    //   }),
  },
});
