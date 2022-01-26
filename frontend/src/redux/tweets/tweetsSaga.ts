import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import tweetsApi from "../../services/api";
import { State } from "../types";
import { fetchTweetsError, fetchTweetsSuccess } from "./tweetsSlice";
import { TweetsType } from "./types";

function* fetchTweetsWorker() {
  try {
    const response: AxiosResponse<State<TweetsType>["items"][]> = yield call(
      tweetsApi.fectchTweets
    );
    yield put(fetchTweetsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchTweetsError(error));
  }
}

export function* tweetsWatcher() {
  yield takeEvery("tweets/fetchTweets", fetchTweetsWorker);
}
