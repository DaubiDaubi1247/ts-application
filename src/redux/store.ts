import { createStore, applyMiddleware, combineReducers,  } from "redux"
import thunk from "redux-thunk"
import { filmsReducer } from "./reducer/films-header-reducer"



type RootReducerType = typeof filmsReducer 
export type AppStateType = ReturnType<RootReducerType> // не особо понял, поискать!!!

const store = createStore(filmsReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store;

export default store
