import React from "react";
import {useHistory} from "react-router-dom"
//COMPONENTS
import {smallImage} from "../util"
//STYLES AND ANIMATION
import styled from "styled-components"
import {motion} from "framer-motion"
//REDUX
import {useSelector} from "react-redux"
//IMAGES
import FullStars from "../img/Full_Star.png"
import EmptyStars from "../img/Empty_Stars.png"

const GameDetails = ({pathID}) => {
    console.log(pathID);
    const history = useHistory()
    //EXIT DEATIL
    const exitDetailHandler = (e) => {
        const element = e.target;
        console.log(element);
        if(element.classList.contains("45DF23!")){
            document.body.style.overflow = 'auto'
            history.push("/")
        }
    }

    const getStars = () => {
        const stars = []
        const rating = Math.floor(gameDetails.rating)
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                console.log("full");
                stars.push(<img className="ratingStar" alt="full" key={i} src={FullStars}/>)
            }else{
                console.log("empty");
                stars.push(<img className="ratingStar" alt="empty" key={i} src={EmptyStars}></img>)
            }
        }
        return stars
    }

    //DATA
    const {gameDetails, gameScreenshots, isLoading} = useSelector((state) => state.game_details)
    return(
        <section>
        {!isLoading && (
        <CardShow className="45DF23!" onClick={exitDetailHandler}>
            <Detail layoutId={pathID}>
            <article>
                <h1 className="gameTitle">{gameDetails.name}</h1>
                <section className="gameDetailsContainer">
                    <div className="ratingContainer">
                        <h3>Rating: {gameDetails.rating} / {gameDetails.rating_top}</h3>
                        {getStars()}
                    </div>
                    <div className="platformContainer">
                        {
                            gameDetails.platforms.map((item)=>{
                                return <h3 className="platform">{item.platform.name}</h3>
                            })
                        }
                    </div>
                </section>
            </article>
                <img className="backGroundImage" src={smallImage(gameDetails.background_image, 1280)}/>
            <section>
                <p>{gameDetails.description_raw}</p>
            </section>
            <section>
                <h2>Screenshots</h2>
                <div className="screenshotContainer">
                    {
                        
                        gameScreenshots.results.map((item)=>{
                            return <img key={item.id} className="screenshot" src={smallImage(item.image, 1280)}/>
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
        margin:1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2{
        padding: 0px;
        color:grey;
    }
    h3{
        margin:0rem 1rem;
        color:darkgrey;
    }
    .ratingContainer, .platformContainer{
        margin: 1rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
    }
    .ratingStar{
        width: 1.5rem;
    }
    .backGroundImage{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .screenshot{
        width: 90%;
        margin: 0.5rem;
    }
    .screenshotContainer{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`
const Detail = styled(motion.div)`
    width: 90%;
    border-radius: 25px;
    margin-top:2rem;
    padding: 2rem;
    background:white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)

`
export default GameDetails