import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import tweetsReducer from "./tweets/tweetsSlice";
import tweetReducer from "./tweet/tweetSlice";
import tagsReducer from "./tags/tagsSlice";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    tweetsReducer,
    tagsReducer,
    tweetReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
