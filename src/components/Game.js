import React from "react";
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//COMPONENTS
import {smallImage} from "../util"
//REDUX
import {useDispatch} from "react-redux"
import loadDetail from "../actions/detailAction"
//REACT_ROUTER_DOM
import {Link} from "react-router-dom"


const Game = ({name, released, id, image}) => {
    const stringPathId = id.toString()
    //LOAD DETAILS HANDLER
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        console.log(typeof stringPathId);
        document.body.style.overflow = 'hidden'
        console.log(id);
        dispatch(loadDetail(id))
    }
    return(
        <SlotGame layoutId={stringPathId} key={id} onClick={loadDetailHandler}>
            <Link className="link" to={`/game/${id}`}>
                <img src={smallImage(image, 640)} alt={name}/>
                <h3>{name}</h3>
                <p>{released}</p>
            </Link>

        </SlotGame>
    )
}

const SlotGame = styled(motion.div)`
display: inline-block;
    column-break-inside: avoid;
    overflow: hidden;
    margin: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    border-radius: 1rem;
    border-top: none;
    box-shadow:grey 2px 2px 10px;
    img{
        width: 100%;
    }
    .link{
        color: #1a1a1a;
        text-decoration: none;
    }
    h3{
        margin: 1rem;
        font-weight: 800;
    }
    p{
        margin:0.5rem;
        font-weight: 400;
    }
`;

export default Game