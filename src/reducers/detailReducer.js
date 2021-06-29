const DetailsState = {gameDetails:{},
                        gameScreenshots:{}}

const detailReducer = (state=DetailsState, action) => {
    switch (action.type){
        case "GET_DETAIL":
            return {...state, gameDetails:action.payload.details,
                                gameScreenshots:action.payload.screenshots}
        default:
            return {...state}
    }
}

export default detailReducer
