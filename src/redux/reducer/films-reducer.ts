import * as FilmsTypes from"./types/fims-types"

export const setUserInput = (userInput: string) : FilmsTypes.SetUserInputType => {
    return {
        type : FilmsTypes.FilmsActionTypes.SET_USER_INPUT,
        userInput,
    }
}

const initialState : FilmsTypes.InitialFilmsStateType = {
    userInput : ""
}

export const filmsReducer = (state : FilmsTypes.InitialFilmsStateType = initialState,action : FilmsTypes.ActionsType) : FilmsTypes.InitialFilmsStateType => {
    switch (action.type) {
        case FilmsTypes.FilmsActionTypes.SET_USER_INPUT : 
            return {
                ...state,
                userInput: action.userInput
            }
        default: return state
    }
}