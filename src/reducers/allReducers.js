import gameReducer from "./gamesReducer"
import detailReducer from "./detailReducer"
import {combineReducers} from "redux"

const rootReducers = combineReducers({
    games: gameReducer,
    game_details:detailReducer
})

export default rootReducers