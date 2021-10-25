import React from "react";
import skills from "../../assets/imgs/skills.svg.png"
import draw from '../../assets/imgs/draw.png'
import './aboutMe.css'


export function AboutMe() {
    return (
        <div className="a-container">
            <div className="a-texts">
                <h2 className="a-title" id="me">About me </h2>
                <p className="a-p">I see myself as a determined individual,
                    with very good social skills and great capacity for learning.
                    Over the past year I have discovered my passion for web and application development,
                    and I have decided to do a 180º spin with my life and switch the tourism industry for a career in
                    web development.
                    I’m looking forward to bringing that passion to a full-time role!
                </p>
                <p className="a-p">
                    When I'm not coding, you can find me at the Gym, hiking, cooking or dancing 💃</p>
            </div>
            <div className="">
                <img className="a-img" src={skills} alt=""/>
            </div>
            <div className="">
                <img className="a-img" src={draw} alt=""/>
            </div>
            <div className="about__texts">
                <h2 className="a-title">About my career</h2>
                <p className="a-p">I started as a self-taught web-developer for a couple of months, then I
                    enrolled
                    in an intense Bootcamp at Factoria F5 based in Barcelona where I learned HMTL5, CSS3, JavaScript,
                    React, SQL among others
                    while practicing and working on individual and group projects.</p>
                <p className="a-p">Being in a position to change the world with code made me realize how
                    much I wanted to work for this.
                    Makes me happy being able to create, learn, explore and think about how to make things/code better.
                </p>
            </div>
        </div>
    )
}