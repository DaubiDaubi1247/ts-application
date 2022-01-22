import { GetStartFilmsItemType } from "../../../api/api-types";

export enum FilmsActionTypes {
    SET_USER_INPUT = "SET_USER_INPUT",
    SET_START_FILMS = "SET_START_FILMS",
    SET_USER_FILMS = "SET_USER_FILMS"
}

export interface InitialFilmsStateType {
    userInput : string;
    startFilms : Array<GetStartFilmsItemType>;
    userFilms: Array<GetStartFilmsItemType>
}

export interface SetUserInputType {
    type : FilmsActionTypes.SET_USER_INPUT,
    userInput : string
}


export interface SetStartFilms {
    type : FilmsActionTypes.SET_START_FILMS,
    startFilms : Array<GetStartFilmsItemType> 
}

export interface SetUserFilms {
    type : FilmsActionTypes.SET_USER_FILMS,
    userFilms : Array<GetStartFilmsItemType> 
}

export type ActionsType = SetUserInputType | SetStartFilms | SetUserFilms