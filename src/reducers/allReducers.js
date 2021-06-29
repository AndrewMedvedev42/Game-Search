import gameReducer from "./gamesReducer"
import detailReducer from "./detailReducer"
import {combineReducers} from "redux"

const rootReducers = combineReducers({
    games: gameReducer,
    gameDetails:detailReducer
})

export default rootReducers