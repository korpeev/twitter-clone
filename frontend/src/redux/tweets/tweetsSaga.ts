import {AxiosResponse} from "axios";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import tweetsApi from "../../services/api";
import {State} from "../types";
import {fetchPostTweetError, fetchPostTweetSuccess, fetchTweetsError, fetchTweetsSuccess} from "./tweetsSlice";
import {TweetsType} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";

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

function* postTweetWorker({payload: text}: PayloadAction<string>) {
    try {
        const tweetData = {
            text,
            user: {
                username: 'Aslan',
                fullname: 'korpeev332',
                avatarUrl: 'http://placeimg.com/640/480/technics'
            }
        }
        const response: AxiosResponse<State<TweetsType>['items']> = yield call(tweetsApi.fetchPostTweet, tweetData)
        console.log(response)
        yield put(fetchPostTweetSuccess(response.data))
    } catch (e: any) {
        console.log(e.response)
        yield put(fetchPostTweetError(e))
    }
}

export function* tweetsWatcher() {
    yield takeLatest("tweets/fetchTweets", fetchTweetsWorker);
    yield takeLatest("tweets/fetchPostTweet", postTweetWorker)
}
