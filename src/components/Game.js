import React from "react";
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//REDUX
import {useDispatch, useSelector} from "react-redux"
import loadDetail from "../actions/detailAction"


const Game = ({name, released, id, image}) => {
    const dispatch = useDispatch()
    const loadDeatilHandler = () => {
        console.log(id);
        dispatch(loadDetail(id))
    }
    return(
        <SlotGame key={id} onClick={loadDeatilHandler}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{released}</p>
        </SlotGame>
    )
}

const SlotGame = styled(motion.div)`
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px grey;
    img{
        width: 100%;
    }
    h3{
        font-weight: 400;
    }
    p{
        font-weight: 800;
    }
`;

export default Game