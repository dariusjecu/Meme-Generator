import React from 'react';
import Img from "../../public/img/logo.png"

export default function Header(){
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Img} />
                <h1>Meme Generator</h1>
            </div>
            <h3></h3>  
        </div>
    )
}