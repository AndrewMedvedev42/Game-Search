const DetailsState = {gameDetails:{name:[]},
                        gameScreenshots:{results:[]},
                         isLoading:true}

const detailReducer = (state=DetailsState, action) => {
    console.log(`gameDetails reducer accepted action ${action.type} and deployed corresponding changes of the 'details' state`);
    switch (action.type){
        case "GET_DETAIL":
            return {...state, gameDetails:action.payload.details,
                                gameScreenshots:action.payload.screenshots,
                                    isLoading:false}
        case "LOADING_DETAIL":
            return {...state, isLoading:true}
        default:
            return {...state}
    }
}

export default detailReducer
