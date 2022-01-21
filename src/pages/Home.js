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
    //FETCH GAMES AND STORE THEM INTO games STATE
        const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(loadGames())
        },[dispatch])
    //GET THE DATA FROM games STATE
        const {popular, newGames, upComing, searched} = useSelector((state) => state.games)
    //SEND ACTION TO CLOSE SEARCHED GAMES
        const hideSearchedGames = () => {
            dispatch(deleteSearch())
        }
    return(
        <GameList className="section">
            {/* IF PATH HAS GAME ID, SHOW GAME DETAILS MODAL*/}
            {pathID && <GameDetails pathID={pathID}/>}
            {/* SEARCHED GAMES SECTION */}
            {searched.length ? (
                <section className="searched-games-container">
                    <nav className="input-form">
                        <h2 className="title">Searched</h2>
                        <button className="close-button" onClick={hideSearchedGames}>Close Results</button>
                    </nav>
                    <Games className="games-list">
                        {searched.map((item) => {
                            const {name, released, id, background_image} = item
                            return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                        })}
                    </Games>
                </section>
            ) : ""}
            {/* UP COMMING GAMES SECTION */}
            <h2 className="title">Up Coming</h2>
            <Games className="games-list">
                {upComing.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            {/* POPULAR GAMES SECTION */}
            <h2 className="title">Popular</h2>
            <Games className="games-list">
                {popular.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            {/* NEW GAMES SECTION */}
            <h2 className="title">New Games</h2>
            <Games className="games-list">
                {newGames.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
        </GameList>
    ) 
}

//STYLES WITH STYLE COMPONENTS
const GameList = styled(motion.div)`
    .close-button{
        background-color: white;
        color:#1a1a1a;
        font-size: 1.5rem;
        padding:0.5rem 1rem;
        border:#bfbfbf 1px solid;
        border-radius:25px;
        transition: 0.5s;
    }
    .close-button:hover{
        cursor: pointer;
        color:white;
        background: #333333;
    }
    .title{
        color: #1a1a1a;
        font-size: 2.5rem;
        margin:5rem 0;
    }
    .input-form{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
const Games = styled(motion.div)`
    margin: 0;
    padding: 0;
`;


export default Home