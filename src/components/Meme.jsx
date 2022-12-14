import React, {useState, useEffect} from "react";
// import memesData from "../memesData";

export default function Meme() {
   

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = useState({})

    function getMemes(){
        let memesArray = allMemes.data.memes;
        let newMeme = memesArray[Math.floor(Math.random()*memesArray.length)].url;
        setMeme(prev => ({
         ...prev,
         randomImage:newMeme,
        }))
    }
    
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prev => {return {
            ...prev,
            [name] : value
        }})
    }

    useEffect(() => {
        console.log(allMemes)
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data))
    }, [])

    return(
        <div className="meme-page">
            <div className="meme-form">
            
                <div className="meme-input">
                    <input type="text" placeholder="Top text" className="meme-input-box" name="topText" onChange={handleChange}/>
                    <input type="text" placeholder="Bottom text" className="meme-input-box" name= "bottomText" onChange={handleChange}/>
                </div>
                <button onClick={getMemes} className="meme-button"><h2>Get a new meme image 🖼️</h2></button>
                
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}