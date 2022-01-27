import {TweetsType} from "../redux/tweets/types";

import axios, {AxiosResponse} from "axios";
import {State} from "../redux/types";
import {TagsState} from "../redux/tags/types";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
});
const tweetsApi = {
    async fectchTweets(): Promise<AxiosResponse<State<TweetsType>["items"]>> {
        return await axiosInstance.get<State<TweetsType>["items"]>("/tweets");
    },
    async fetchTags(): Promise<AxiosResponse<State<TagsState>>> {
        return await axiosInstance.get<State<TagsState>>("/tags");
    },
    async fetchTweet(tweetId: string): Promise<AxiosResponse<State<TweetsType>>> {
        return await axiosInstance.get<State<TweetsType>>(`/tweets/${tweetId}`);
    },
    async fetchPostTweet(tweetData: TweetsType) {
        return await axiosInstance.post<AxiosResponse<State<TweetsType>>>(`/tweets`, tweetData)
    }
};

export default tweetsApi;
