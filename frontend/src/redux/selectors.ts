import { createSelector } from "reselect";
import { RootState } from "./store";

const selectTweets = (state: RootState) => state.tweetsReducer;

export const selectTweetsSelector = createSelector(
  selectTweets,
  (tweetsReducer) => tweetsReducer
);
