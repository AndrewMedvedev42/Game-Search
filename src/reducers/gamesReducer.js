
const initState = {
    popular:[],
    newGames:[],
    upComing:[],
    searched:[]
}

const gameReducer = (state=initState, action) => {
    switch (action.type){
        case "FETCH_GAMES":
            return {...state}
        default:
            return {...state}
    }
}

// const fetchGames = () => {
//     return {
//         type:"FETCH_GAMES"
//     }
// }

export default gameReducer