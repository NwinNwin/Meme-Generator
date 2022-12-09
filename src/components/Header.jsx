import React from "react";
import trollface from "../images/amongus.png"

export default function Header() {
    return (
        <div className="header" >
            <div className="header-title">
                <img src={trollface} alt="" className="header-img" />
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}