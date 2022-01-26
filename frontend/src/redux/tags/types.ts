import { UserInfo } from "../types";

type Themes = {
  tag: string;
  tweetsCount: number;
};

export type TagsState = {
  id?: string;
  tweets: [];
  users: UserInfo[];
  themes: Themes[];
};
