import React, {useContext} from "react";
import './toggle.css'
import sun from '../../assets/imgs/sun.png'
import moon from '../../assets/imgs/moon.png'
import {ThemeContext} from "../../context";

export default function Toggle(){

    const theme = useContext(ThemeContext)

    function handleClick() {
        theme.dispatch({ type: "TOGGLE" })
    };

    return(
        <div className="t">
            <img src={sun} alt="" className="t-icon"/>
            <img src={moon} alt="" className="t-icon"/>
            <div className="t-button" onClick={handleClick} style={{ left : theme.state.darkMode ? 0 : 35 }}> </div>
        </div>
    )
}