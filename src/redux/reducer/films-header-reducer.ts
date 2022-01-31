import { setLoadingActionType } from './types/common-types';
import { ThunkAction } from "redux-thunk"
import { filmsAPI } from "../../api/apis"
import { AppStateType } from "../store"
import { setLoading } from "./actions/common-actions"
import { setActorInfo, setFullDescription, setStartFilms, setTrailerUrl, setUserFilms } from "./actions/films-actions"
import * as FilmsTypes from"./types/fims-types"

const initialState : FilmsTypes.InitialFilmsStateType = {
    userInput : "",
    startFilms: [],
    userFilms: [],
    fullDescr : null,
    actorInfo : null,
    videoIdForYoutube : "",
}

export const filmsReducer = (state : FilmsTypes.InitialFilmsStateType = initialState,action : FilmsTypes.ActionsType) : FilmsTypes.InitialFilmsStateType => {
    switch (action.type) {
        case FilmsTypes.FilmsActionTypes.SET_USER_INPUT : 
            return {
                ...state,
                userInput: action.userInput
            }
        case FilmsTypes.FilmsActionTypes.SET_START_FILMS :
            return {
                ...state,
                startFilms : [...action.startFilms]
            }
        case FilmsTypes.FilmsActionTypes.SET_USER_FILMS : 
            return {
                ...state,
                userFilms: [...action.userFilms]
            }
        case FilmsTypes.FilmsActionTypes.SET_FULL_DESCRIPTION:
            return {
                ...state,
                fullDescr : {...action.fullDescr}
            }
        case FilmsTypes.FilmsActionTypes.SET_ACTOR_INFO :
            return {
                ...state,
                actorInfo : {...action.actorInfo}
            }
        case FilmsTypes.FilmsActionTypes.SET_TRAILER_URL :
            return {
                ...state,
                videoIdForYoutube : action.videoIdForYoutube
            }
        default: return state
    }
}

export type ThunkType = ThunkAction<void,AppStateType,unknown,FilmsTypes.ActionsType | setLoadingActionType>

export const getStartFilms = () : ThunkType => async (dispatch) => {
    const response = await filmsAPI.getStartFilms();
    dispatch(setLoading(false));
    dispatch(setStartFilms(response.items))
}

export const getUserFilms = (filmsName: string) : ThunkType => async (dispatch) => {
    const response = await filmsAPI.getUserFilms(filmsName);
    dispatch(setUserFilms(response.results))
}

export const getFullDescription = (id: string | undefined): ThunkType => async (dispatch) => {
    const response = await filmsAPI.getFullDescription(id);
    dispatch(setFullDescription(response))
}

export const getActorInfo = (id: string | undefined) : ThunkType => async (dispatch) => {
    const response = await filmsAPI.getActorInfo(id);
    dispatch(setActorInfo(response))
}

export const getTrailerURL = (id: string | undefined) : ThunkType => async (dispatch) => {
    const response = await filmsAPI.getTrailerURL(id);
    dispatch(setTrailerUrl(response.videoId))
}