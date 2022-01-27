export enum LoadingState {
    NEVER = "NEVER",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}

export enum AddFormState {
    NEVER = "NEVER",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}

export type State<T> = {
    items: T;
    loadingState: LoadingState;
    addFormState?: AddFormState;
    errors: Error | null;
};
export type UserInfo = {
    username: string;
    fullname: string;
    avatarUrl: string;
};
