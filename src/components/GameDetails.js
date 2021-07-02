import React from "react";
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//REDUX
import {useSelector} from "react-redux"
// import loadDetail from "../actions/detailAction"


const GameDetails = () => {
    const {gameDetails, gameScreenshots, isLoading} = useSelector((state) => state.game_details)
    return(
        <section>
        {!isLoading && (
        <CardShow>
            <Detail>
            <article>
                <h1 className="gameTitle">{gameDetails.name}</h1>
                <section className="gameDetailsContainer">
                    <div className="ratingContainer">
                        <h2>Rating: </h2>
                        <h3>{gameDetails.rating} / {gameDetails.rating_top}</h3>
                    </div>
                    <div className="platformContainer">
                        <h2>Platforms:</h2>
                        {
                            gameDetails.platforms.map((item)=>{
                                return <h3>{item.platform.name}</h3>
                            })
                        }
                    </div>
                </section>
            </article>
                <img className="backGroundImage" src={gameDetails.background_image}/>
            <section>
                <p>{gameDetails.description_raw}</p>
            </section>
            <section>
                <h2>Screenshots</h2>
                <div className="screenshotContainer">
                    {
                        gameScreenshots.results.map((item)=>{
                            return <img key={item.id} className="screenshot" src={item.image}/>
                        })
                    }
                </div>
            </section>
            </Detail>
        </CardShow>
        )}
        </section>
    )}

const CardShow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y:scroll ;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
    .gameDetailsContainer{
        display: flex;
        margin:3rem;
        justify-content: space-evenly;
    }
    h2{
        padding: 0px;
    }
    .ratingContainer, .platformContainer{
        display: flex;
        align-items: center;
        padding: 0;
    }
    .backGroundImage{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .screenshot{
        width: 90%;
        margin: 1rem;
    }
    .screenshotContainer{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 25px;
    margin:2rem;
    padding: 2rem;
    background:white;
    position: absolute;
    left:10%;

`
export default GameDetails