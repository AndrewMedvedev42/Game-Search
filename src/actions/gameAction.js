import axios from "axios"
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from "../API"

//GET POPULAR, IPCOMMING AND NEW GAMES
export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newData = await axios.get(newGamesURL())
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            newgames: newData.data.results,
            upcoming: upcomingData.data.results
        }
    })
}

//GET SEARCHED GAMES
export const loadSearch = (game) => async (dispatch) => {
    const searchedData = await axios.get(searchGameURL(game))
    dispatch({
        type:"FETCH_SEARCHED",
        payload:{
            searched: searchedData.data.results,
        }
    })
}

//REMOVE SEARCHED GAMES FROM STATE
export const deleteSearch = () => async (dispatch) => {
    dispatch({
        type:"CLOSE_SEARCHED",
    })
}

