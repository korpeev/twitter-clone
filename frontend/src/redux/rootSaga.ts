import { all, fork } from "redux-saga/effects";
import { tweetsWatcher } from "./tweets/tweetSaga";

export default function* () {
  yield all([fork(tweetsWatcher)]);
}
