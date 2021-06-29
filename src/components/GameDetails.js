import React from "react";
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//REDUX
import {useSelector} from "react-redux"
// import loadDetail from "../actions/detailAction"


const GameDetails = () => {
    const {gameDetails, gameScreenshots} = useSelector((state) => state.gameDetails)
    return(
        <CardShow>
            <Detail>
                <h1>{gameDetails.name}</h1>
            </Detail>
        </CardShow>
    )}

const CardShow = styled(motion.div)`
    h1{
        margin: 1rem;
    }
    width: 100%;
    min-height: 100vh;
    overflow-y:scroll ;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 25px;
    margin:2rem;
    padding: 2rem;
    background: white;
    position: absolute;
    left:10%;

`
export default GameDetails