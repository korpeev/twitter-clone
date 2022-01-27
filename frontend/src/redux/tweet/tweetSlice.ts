import {LoadingState, State} from "./../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TweetsType} from "../tweets/types";

const initialState: State<TweetsType> = {
    items: {} as TweetsType,
    loadingState: LoadingState.NEVER,
    errors: null,
};
const tweetSlice = createSlice({
    name: "tweet",
    initialState,
    reducers: {
        fetchTweet: (state, action) => {
            state.loadingState = LoadingState.LOADING;
            state.items = {} as TweetsType;
            state.errors = null;
        },
        fetchTweetSuccess: (state, action: PayloadAction<State<TweetsType>["items"]>) => {
            state.loadingState = LoadingState.SUCCESS;
            state.items = action.payload;
        },
        fetchTweetError: (state, action: PayloadAction<Error>) => {
            state.loadingState = LoadingState.ERROR;
            state.errors = action.payload;
            state.items = {} as TweetsType;
        },
    },
});

export const {fetchTweet, fetchTweetError, fetchTweetSuccess} = tweetSlice.actions;
export default tweetSlice.reducer;
