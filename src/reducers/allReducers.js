import gameReducer from "./gamesReducer"
import {combineReducers} from "redux"

const rootReducers = combineReducers({
    games: gameReducer
})

export default rootReducers