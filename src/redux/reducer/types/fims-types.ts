export enum FilmsActionTypes {
    SET_USER_INPUT = "SET_USER_INPUT"
}

export interface InitialFilmsStateType {
    userInput : string;
}

export interface SetUserInputType {
    type : FilmsActionTypes.SET_USER_INPUT,
    userInput : string
}

export type ActionsType = SetUserInputType