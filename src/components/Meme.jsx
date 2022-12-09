import React from "react";

export default function Meme() {
    return(
        <form action="" className="meme-form">
            <div className="meme-input">
                <input type="text" placeholder="Shut up" className="meme-input-box"/>
                <input type="text" placeholder="and take my money" className="meme-input-box"/>
            </div>
            <button className="meme-button"><h2>Get a new meme image 🖼️</h2></button>
        </form>
    )
}