import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import tweetsApi from "../../services/api";
import { State } from "../types";
import { fetchTagsError, fetchTagsSuccess } from "./tagsSlice";
import { TagsState } from "./types";

function* fetchTagsWorker() {
  try {
    const response: AxiosResponse<State<TagsState>["items"]> = yield call(
      tweetsApi.fetchTags
    );
    yield put(fetchTagsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchTagsError(error));
  }
}

export function* tweetsWatcher() {
  yield takeEvery("tags/fetchTags", fetchTagsWorker);
}
