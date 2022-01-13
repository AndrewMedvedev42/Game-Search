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
                <section className="searched-games-container">
                    <nav className="input-form">
                        <h2 className="title">Searched</h2>
                        <button className="close-button" onClick={hideSearchedGames}>Close Results</button>
                    </nav>
                    <Games>
                        {searched.map((item) => {
                            const {name, released, id, background_image} = item
                            return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                        })}
                    </Games>
                </section>
            ) : ""}

            <h2 className="title">Up Coming</h2>
            <Games className="games-list">
                {upComing.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            <h2 className="title">Popular</h2>
            <Games className="games-list">
                {popular.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            <h2 className="title">New Games</h2>
            <Games className="games-list">
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
    padding: 0 1rem;
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