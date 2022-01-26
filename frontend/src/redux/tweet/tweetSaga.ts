import { TweetsType } from "./../tweets/types";
import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import tweetsApi from "../../services/api";
import { State } from "../types";
import { fetchTweetError, fetchTweetSuccess } from "./tweetSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchTweetWorker({ payload: tweetId }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<State<TweetsType>["items"]> = yield call(
      tweetsApi.fetchTweet,
      tweetId
    );
    yield put(fetchTweetSuccess(response.data));
  } catch (error: any) {
    yield put(fetchTweetError(error));
  }
}

export function* tweetWatcher() {
  yield takeEvery("tweet/fetchTweet", fetchTweetWorker);
}
