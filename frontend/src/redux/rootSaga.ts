import { all, fork } from "redux-saga/effects";
import { tagsWatcher } from "./tags/tagsSaga";
import { tweetWatcher } from "./tweet/tweetSaga";
import { tweetsWatcher } from "./tweets/tweetsSaga";

export default function* () {
  yield all([fork(tweetsWatcher), fork(tagsWatcher), fork(tweetWatcher)]);
}
