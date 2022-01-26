import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState, State } from "../types";
import { TagsState } from "./types";

const initialState: State<TagsState> = {
  items: {} as TagsState,
  loadingState: LoadingState.NEVER,
  errors: null,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    fetchTags: (state) => {
      state.loadingState = LoadingState.LOADING;
      state.items = {} as TagsState;
      state.errors = null;
    },
    fetchTagsSuccess: (state, action: PayloadAction<State<TagsState>["items"]>) => {
      state.loadingState = LoadingState.SUCCESS;
      state.items = action.payload;
    },
    fetchTagsError: (state, action: PayloadAction<Error[]>) => {
      state.loadingState = LoadingState.ERROR;
      state.errors = action.payload;
      state.items = {} as TagsState;
    },
  },
});

export const { fetchTags, fetchTagsError, fetchTagsSuccess } = tagsSlice.actions;
export default tagsSlice.reducer;
