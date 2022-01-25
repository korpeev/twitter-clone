import { UserInfo } from "../types";

type Themes = {
  tag: string;
  tweetsCount: number;
};

export type TagsState = {
  tweets: [];
  user: UserInfo;
  themes: Themes[];
};
