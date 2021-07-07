import {React, useState} from "react";
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//REDUX AND ROUTES
import {loadSearch} from "../actions/gameAction"
import {useDispatch} from "react-redux"
//IMAGES
export const Navigation = () => {

    const [gameName, setGameName] = useState("")
    const  onChange = (e) => {
        setGameName(e.target.value)
    }
    const dispatch = useDispatch()
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(loadSearch(gameName))
    }
    return (
        <Nav>
            <form className="inputContainer">
                <input value={gameName} onChange={onChange} type="text"></input>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </Nav>
    )
}

const Nav = styled(motion.div)`
    margin: 2rem;
    display: flex;
    justify-content:center;
    input, button{
        color:#1a1a1a;
        font-size: 1.5rem;
        padding:0.5rem 1rem;
        border:#bfbfbf 1px solid;
    }
    input{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }
    button{
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        transition: 0.5s;
        border-left: none;
        background-color: white;
    }
    button:hover{
        cursor: pointer;
        color:white;
        background: #333333;
    }
`