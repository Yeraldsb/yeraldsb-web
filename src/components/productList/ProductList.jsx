import React from "react";
import './productList.css'
import Product from "../product/Product";
import {projects } from '../../data'

export default function ProductList(){
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & inspire. It´s me</h1>
                <p className="pl-desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa cumque deserunt ex ipsam minima nemo numquam omnis sapiente sit. Cumque distinctio eius facilis,
                    fugiat illo itaque iure quaerat voluptatibus?</p>
            </div>

            <div className="pl-list">
                {projects.map(item => (
                    <Product
                        key={item.id}
                        img={item.img}
                        link={item.link}
                    />
                )) }
            </div>

        </div>
    )
}