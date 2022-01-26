import { GetActorInfoResponseType, GetFullDescriptionResponseType } from './../../../api/api-types';
import { GetStartFilmsItemType } from "../../../api/api-types";

export enum FilmsActionTypes {
    SET_USER_INPUT = "SET_USER_INPUT",
    SET_START_FILMS = "SET_START_FILMS",
    SET_USER_FILMS = "SET_USER_FILMS",
    SET_FULL_DESCRIPTION = "SET_FULL_DESCRIPTION",
    SET_ACTOR_INFO = "SET_ACTOR_INFO",
}

export interface InitialFilmsStateType {
    userInput : string;
    startFilms : Array<GetStartFilmsItemType>;
    userFilms: Array<GetStartFilmsItemType>
    fullDescr : GetFullDescriptionResponseType | null
    actorInfo : GetActorInfoResponseType | null
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

export interface SetFullDescription {
    type : FilmsActionTypes.SET_FULL_DESCRIPTION,
    fullDescr : GetFullDescriptionResponseType
}

export interface SetActorInfo {
    type : FilmsActionTypes.SET_ACTOR_INFO,
    actorInfo : GetActorInfoResponseType
}

export type ActionsType = SetUserInputType | SetStartFilms | SetUserFilms | SetFullDescription | SetActorInfo