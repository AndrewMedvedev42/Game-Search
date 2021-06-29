const initState = {
    popular:[],
    newGames:[],
    upComing:[],
    searched:[]
}

const gameReducer = (state=initState, action) => {
    switch (action.type){
        case "FETCH_GAMES":
            return {...state,
                         popular:action.payload.popular,
                         newGames:action.payload.newgames,
                         upComing:action.payload.upcoming}
        default:
            return {...state}
    }
}

export default gameReducer