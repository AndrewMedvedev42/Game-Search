import axios from "axios"
import {gameDetailsURL, gameScreenshotURL} from "../API"

const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id))
    const screenshotData = await axios.get(gameScreenshotURL(id))
    dispatch({
        type:"GET_DETAIL",
        payload:{
            details:detailData.data,
            screenshots:screenshotData.data
        }
    })
}

export default loadDetail