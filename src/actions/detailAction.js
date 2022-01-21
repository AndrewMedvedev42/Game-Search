import axios from "axios"
import {gameDetailsURL, gameScreenshotURL} from "../API"

//GET GAME DETAILS
const loadDetail = (id) => async (dispatch) => {
    //SETS STATE LOADING_DETAILS TO CREATE SIDEEFFECT
    dispatch({
        type:"LOADING_DETAIL"
    })

    const detailData = await axios.get(gameDetailsURL(id))
    const screenshotData = await axios.get(gameScreenshotURL(id))
    console.log(`detailAction recived id: ${id}`);
    dispatch({
        type:"GET_DETAIL",
        payload:{
            details:detailData.data,
            screenshots:screenshotData.data
        }
    })
}

export default loadDetail