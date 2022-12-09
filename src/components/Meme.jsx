import React, {useState} from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemes(){
        let memesArray = allMemeImages.data.memes;
        let newMeme = memesArray[Math.floor(Math.random()*memesArray.length)].url;
        setMeme(prev => ({
         ...prev,
         randomImage:newMeme,
        }))
    }

    return(
        <div className="meme-page">
            <div className="meme-form">
            
                <div className="meme-input">
                    <input type="text" placeholder="Shut up" className="meme-input-box"/>
                    <input type="text" placeholder="and take my money" className="meme-input-box"/>
                </div>
                <button onClick={getMemes} className="meme-button"><h2>Get a new meme image 🖼️</h2></button>
                
            </div>
            <img className="meme-img" src={meme.randomImage} alt="" />
        </div>
    )
}