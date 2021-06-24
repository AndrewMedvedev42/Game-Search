import axios from "axios"
import {popularGamesURL, upcomingGamesURL, newGamesURL} from "../API"

const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newData = await axios.get(newGamesURL())
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            newgames: upcomingData.data.results,
            upcoming: newData.data.results,
        }
    })
}

export default loadGames