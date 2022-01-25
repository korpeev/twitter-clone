import { TweetsType } from "./../redux/tweets/types";
import axios, { AxiosResponse } from "axios";
import { State } from "../redux/types";
import { TagsState } from "../redux/tags/types";

const tweetsApi = {
  async fectchTweets(): Promise<AxiosResponse<State<TweetsType>["items"]>> {
    const response = await axios.get<State<TweetsType>["items"]>(
      "https://61eead25d593d20017dbb047.mockapi.io/tweet"
    );
    return response;
  },
  async fetchTags(): Promise<AxiosResponse<State<TagsState>>> {
    const response = await axios.get<State<TagsState>>("");
    return response;
  },
};

export default tweetsApi;
