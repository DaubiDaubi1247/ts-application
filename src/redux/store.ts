import { commonReducer } from './reducer/common-reducer';
import { createStore, applyMiddleware, combineReducers,  } from "redux"
import thunk from "redux-thunk"
import { filmsReducer } from "./reducer/films-header-reducer"

const reducers = combineReducers({
    films: filmsReducer,
    commonReducer
})

type RootReducerType = typeof reducers 
export type AppStateType = ReturnType<RootReducerType> // не особо понял, поискать!!!

const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store;

export default store
