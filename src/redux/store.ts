import { createStore, applyMiddleware,  } from "redux"
import thunk from "redux-thunk"
import { filmsReducer } from "./reducer/films-reducer"

type RootReducerType = typeof filmsReducer // не особо понял, поискать!!!
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(filmsReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store;

export default store
