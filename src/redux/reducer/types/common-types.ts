export enum CommonActionType {
    SET_LOADING = "SET_LOADING"
}

export interface commonInitialStateType {
    isLoading: boolean;
}

export interface setLoadingActionType {
    type : CommonActionType.SET_LOADING
    isLoading: boolean
}

export type ActionType = setLoadingActionType