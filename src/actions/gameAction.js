import axios from "axios"
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from "../API"

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

export const loadSearch = (game) => async (dispatch) => {
    const searchedData = await axios.get(searchGameURL(game))
    dispatch({
        type:"FETCH_SEARCHED",
        payload:{
            searched: searchedData.data.results,
        }
    })
}

