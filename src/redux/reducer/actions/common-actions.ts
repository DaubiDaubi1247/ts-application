import { setLoadingActionType } from './../types/common-types';
import { CommonActionType } from "../types/common-types"

export const setLoading = (loading: boolean) : setLoadingActionType=> {
    return {
        type : CommonActionType.SET_LOADING,
        isLoading : loading
    }
}