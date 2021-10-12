import React from 'react'

function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-element">
                <img src={process.env.PUBLIC_URL + `/images/red-flower.svg`} />
                <br/>
                <p>hi</p>
            </div>
        </div>
    )
}

export default Intro
