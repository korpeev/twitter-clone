import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState, State } from "../types";
import { TweetsType } from "./types";
const initialState: State<TweetsType> = {
  items: [],
  loadingState: LoadingState.NEVER,
  errors: null,
};
const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    fetchTweets: (state) => {
      state.loadingState = LoadingState.LOADING;
      state.items = [];
      state.errors = null;
    },
    fetchTweetsSuccess: (state, action: PayloadAction<State<TweetsType>["items"]>) => {
      state.loadingState = LoadingState.SUCCESS;
      state.items = action.payload;
    },
    fetchTweetsError: (state, action: PayloadAction<Error[]>) => {
      state.loadingState = LoadingState.ERROR;
      state.errors = action.payload;
      state.items = [];
    },
  },
});

export const { fetchTweets, fetchTweetsError, fetchTweetsSuccess } = tweetsSlice.actions;
export default tweetsSlice.reducer;
