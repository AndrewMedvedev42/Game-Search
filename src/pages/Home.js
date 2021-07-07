import React, { useEffect } from "react";
//Redux
import {useDispatch, useSelector} from "react-redux"
import {loadGames} from "../actions/gameAction"
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
    return(
        <GameList>
            {/* <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathID && <GameDetails pathID={pathID}/>}</AnimatePresence> */}
            {pathID && <GameDetails pathID={pathID}/>}
            {searched.length ? (
                <div className="searchedGamesContainer">
                    <h2 className="Title">Searched</h2>
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
    h2{
        color: #1a1a1a;
        font-size: 2.5rem;
        padding:5rem 0;
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