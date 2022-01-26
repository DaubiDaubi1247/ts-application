import * as CommonTypes from "./types/common-types";

type InitialStateT = CommonTypes.commonInitialStateType

const initialState : InitialStateT = {
    isLoading : false,
}

export const commonReducer = (state : InitialStateT = initialState,action : CommonTypes.ActionType) : InitialStateT => {
    switch (action.type) {
        case CommonTypes.CommonActionType.SET_LOADING : 
            return {
                ...state,
                isLoading : action.isLoading
            }
        default: return state
    }
}