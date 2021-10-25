import React, {useContext} from "react";
import './product.css'
import {ThemeContext} from "../../context";

export default function Product({img, link}){

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return(
        <div className="p">
            <div   style={{ backgroundColor: darkMode && "#ff8f00" }} className="p-browser">
                <div className="p-circle"> </div>
                <div className="p-circle"> </div>
                <div className="p-circle"> </div>
            </div>

            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img"/>
            </a>
        </div>
    )
}
