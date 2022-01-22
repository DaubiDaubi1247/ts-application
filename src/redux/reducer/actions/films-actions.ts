import { SetUserFilms } from './../types/fims-types';
import { GetStartFilmsItemType } from "../../../api/api-types"
import * as FilmsTypes from "../types/fims-types"


export const setUserInput = (userInput: string) : FilmsTypes.SetUserInputType => {
    return {
        type : FilmsTypes.FilmsActionTypes.SET_USER_INPUT,
        userInput,
    }
}

export const setStartFilms = (startFilms : Array<GetStartFilmsItemType>) : FilmsTypes.SetStartFilms => {
    return {
        type : FilmsTypes.FilmsActionTypes.SET_START_FILMS,
        startFilms,
    }
}

export const setUserFilms = (userFilms : Array<GetStartFilmsItemType>) : SetUserFilms => {
    return {
        type: FilmsTypes.FilmsActionTypes.SET_USER_FILMS,
        userFilms
    }
}