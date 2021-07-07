import React, { useEffect } from "react";
//Redux
import {useDispatch, useSelector} from "react-redux"
import {loadGames, deleteSearch} from "../actions/gameAction"
//Components
import Game from "../components/Game"
import GameDetails from "../components/GameDetails"
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion"
//REACT_ROUTER_DOM
import {useLocation} from "react-router-dom"

const Home = () => {
    //CURRENT LOCATION
        const location = useLocation()
        const pathID = location.pathname.split("/")[2]
        console.log(pathID);
    //FETCH GAMES
        const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(loadGames())
        },[dispatch])
    //GET THE DATA
        const {popular, newGames, upComing, searched} = useSelector((state) => state.games)
    //CLOSE SEARCHED GAMES
        const hideSearchedGames = () => {
            dispatch(deleteSearch())
        }
    return(
        <GameList>
            {/* <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathID && <GameDetails pathID={pathID}/>}</AnimatePresence> */}
            {pathID && <GameDetails pathID={pathID}/>}
            {searched.length ? (
                <div className="searchedGamesContainer">
                    <div className="inputform">
                        <h2 className="Title">Searched</h2>
                        <button className="closeBtn" onClick={hideSearchedGames}>Close Results</button>
                    </div>
                    <Games>
                        {searched.map((item) => {
                            const {name, released, id, background_image} = item
                            return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                        })}
                    </Games>
                </div>
            ) : ""}

            <h2 className="Title">Up Coming</h2>
            <Games>
                {upComing.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            <h2 className="Title">Popular</h2>
            <Games>
                {popular.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            <h2 className="Title">New Games</h2>
            <Games>
                {newGames.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            {/* </AnimateSharedLayout> */}
        </GameList>
    ) 
}

const GameList = styled(motion.div)`
    padding: 0 5rem;
    .Title{
    }
    .closeBtn{
        background-color: white;
        color:#1a1a1a;
        font-size: 1.5rem;
        padding:0.5rem 1rem;
        border:#bfbfbf 1px solid;
        border-radius:25px;
        transition: 0.5s;
    }
    .closeBtn:hover{
        cursor: pointer;
        color:white;
        background: #333333;
    }
    h2{
        color: #1a1a1a;
        font-size: 2.5rem;
        margin:5rem 0;
    }
    .inputform{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const Games = styled(motion.div)`
    margin: 0;
    padding: 0;
    min-height:80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: center;
`;


export default Home