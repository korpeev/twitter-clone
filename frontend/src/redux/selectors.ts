import { createSelector } from "reselect";
import { RootState } from "./store";

const selectTweets = (state: RootState) => state.tweetsReducer;
const selectTags = (state: RootState) => state.tagsReducer;
const selectTweet = (state: RootState) => state.tweetReducer;
export const selectTweetsSelector = createSelector(
  selectTweets,
  (tweetsReducer) => tweetsReducer
);

export const selectTagsSelector = createSelector(
  selectTags,
  (tagsReducer) => tagsReducer
);

export const selectTweetSelector = createSelector(
  selectTweet,
  (tweetReducer) => tweetReducer
);
