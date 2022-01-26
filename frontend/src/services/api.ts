import { TweetsType } from "./../redux/tweets/types";
import axios, { AxiosResponse } from "axios";
import { State } from "../redux/types";
import { TagsState } from "../redux/tags/types";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});
const tweetsApi = {
  async fectchTweets(): Promise<AxiosResponse<State<TweetsType>["items"]>> {
    const response = await axiosInstance.get<State<TweetsType>["items"]>("/tweets");
    return response;
  },
  async fetchTags(): Promise<AxiosResponse<State<TagsState>>> {
    const response = await axiosInstance.get<State<TagsState>>("/tags");
    return response;
  },
  async fetchTweet(tweetId: string): Promise<AxiosResponse<State<TweetsType>>> {
    const response = await axiosInstance.get<State<TweetsType>>(`/tweets/${tweetId}`);
    return response;
  },
};

export default tweetsApi;
