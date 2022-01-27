import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddFormState, LoadingState, State} from "../types";
import {TweetsType} from "./types";

const initialState: State<TweetsType[]> = {
    items: [],
    loadingState: LoadingState.NEVER,
    addFormState: AddFormState.NEVER,
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
        fetchTweetsSuccess: (state, action: PayloadAction<State<TweetsType[]>["items"]>) => {
            state.loadingState = LoadingState.SUCCESS;
            state.items = action.payload;
        },
        fetchTweetsError: (state, action: PayloadAction<Error>) => {
            state.loadingState = LoadingState.ERROR;
            state.errors = action.payload;
            state.items = [];
        },
        fetchPostTweet: (state, action) => {
            state.addFormState = AddFormState.LOADING
        },
        fetchPostTweetSuccess: (state, action: PayloadAction<TweetsType>) => {
            state.addFormState = AddFormState.SUCCESS
            state.items = [action.payload, ...state.items]
        },
        fetchPostTweetError: (state, {payload}: PayloadAction<Error>) => {
            state.addFormState = AddFormState.ERROR
            state.errors = payload
        }
    },
});

export const {
    fetchTweets,
    fetchTweetsError,
    fetchTweetsSuccess,
    fetchPostTweet,
    fetchPostTweetError,
    fetchPostTweetSuccess
} = tweetsSlice.actions;
export default tweetsSlice.reducer;
