import { ThunkAction } from "redux-thunk"
import { filmsAPI } from "../../api/apis"
import { AppStateType } from "../store"
import { setStartFilms } from "./actions/films-actions"
import * as FilmsTypes from"./types/fims-types"

const initialState : FilmsTypes.InitialFilmsStateType = {
    userInput : "",
    startFilms: [],
    userFilms: [],
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
                userFilms: action.userFilms
            }
        default: return state
    }
}

type ThunkType = ThunkAction<void,AppStateType,unknown,FilmsTypes.ActionsType>

export const getStartFilms = () : ThunkType => async (dispatch) => {
    const response = await filmsAPI.getStartFilms()
    dispatch(setStartFilms(response.items))
}

export const getUserFilms = (filmsName: string) : ThunkType => async (dispatch) => {
    const response = await filmsAPI.getUserFilms(filmsName);
}