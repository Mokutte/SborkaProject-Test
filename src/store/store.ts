import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sneakersReducer from "./sneakersSlice";

const rootReducer = combineReducers({
  sneakersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
