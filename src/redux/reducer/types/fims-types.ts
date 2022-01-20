export enum FilmsActionTypes {
    SET_USER_INPUT = "SET_USER_INPUT",
    SET_START_FILMS = "SET_START_FILMS"
}

export interface InitialFilmsStateType {
    userInput : string;
    startFilms : []
}

export interface SetUserInputType {
    type : FilmsActionTypes.SET_USER_INPUT,
    userInput : string
}

export interface SetStartFilms {
    type : FilmsActionTypes.SET_START_FILMS,
    startFilms : []
}

export type ActionsType = SetUserInputType | SetStartFilms