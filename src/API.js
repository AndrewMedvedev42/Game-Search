const base_url = "https://api.rawg.io/api/"
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    }else{
        return day
    }
}

const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
//GAME DATA
const popular_Games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`
const upcomming_Games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=9`
const new_Games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=9`

export const popularGamesURL = () => `${base_url}${popular_Games}`
export const upcomingGamesURL = () => `${base_url}${upcomming_Games}`
export const newGamesURL = () => `${base_url}${new_Games}`
//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API_KEY}`
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`
//SEARCH A GAME
export const searchGameURL = (game_name) => `${base_url}games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${game_name}&page_size=3`