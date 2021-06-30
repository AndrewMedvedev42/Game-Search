import axios from "axios"
import {gameDetailsURL, gameScreenshotURL} from "../API"

const loadDetail = (id) => async (dispatch) => {
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