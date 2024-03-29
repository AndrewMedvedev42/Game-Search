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
        case "FETCH_SEARCHED":
            return {...state,
                        searched:action.payload.searched}
        case "CLOSE_SEARCHED":
            return {...state,
                        searched:[]}
        default:
            return {...state}
    }
}

export default gameReducer