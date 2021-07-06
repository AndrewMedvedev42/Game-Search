import React from "react";
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//IMAGES
export const Navigation = () => {
    return (
        <Nav>
            <div className="inputContainer">
                <input type="text"></input>
                <button>Search</button>
            </div>
        </Nav>
    )
}

const Nav = styled(motion.div)`
    margin: 2rem;
    display: flex;
    justify-content:center;
    input, button{
        margin: 0 1rem;
        border-radius:25px;
        font-size: 1.5rem;
        padding:0.5rem 1rem;
        border: none;
        border:0.1px solid black;
    }
    button{
        border:none;
    }
    button:hover{
        color:white;
        background: grey;
    }
`