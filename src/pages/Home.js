import React, { useEffect } from "react";
//Redux
import {useDispatch, useSelector} from "react-redux"
import loadGames from "../actions/gameAction"
//Components
import Game from "../components/Game"
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"

const Home = () => {
    //FETCH GAMES
        const dispatch = useDispatch()
        useEffect(()=>{
        dispatch(loadGames())
        },[dispatch])
    //GET THE DATA
        const {popular, newGames, upComing} = useSelector((state) => state.games)
    return(
        <GameList>
            <h2>Up Coming</h2>
            <Games>
                {upComing.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            <h2>Popular</h2>
            <Games>
                {popular.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((item) => {
                    const {name, released, id, background_image} = item
                    return <Game key={id} name={name} released={released} id={id} image={background_image}/>
                })}
            </Games>
        </GameList>
    ) 
}

const GameList = styled(motion.div)`
    padding: 0 5rem;
    h2{
        padding:5rem 0;
    }
`;
const Games = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-items: center;
`;


export default Home