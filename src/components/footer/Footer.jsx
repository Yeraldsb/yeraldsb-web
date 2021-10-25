import React from "react";
import './footer.css'
import {GitHub, Instagram, LinkedIn} from "@mui/icons-material";


export default function Footer() {
    return (
        <div className="f">
            <div className="footer">
                <div className="footer__grid">
                    <nav className="nav--footer">
                        <h2 className="brand"><h4>Yeraldin Salazar</h4> <br/> This page was made with love ♥
                            Barcelona/España
                        </h2>
                    </nav>

                    <section className="footer__contact">
                        <h3 className="footer__title" id="contact">Contact me </h3>

                        <div className="footer__icons">
                            <span className="footer__container-icons"><Instagram/></span>
                            <span className="footer__container-icons"><GitHub/></span>
                            <span className="footer__container-icons"><LinkedIn/></span>
                        </div>

                    </section>
                </div>

            </div>
        </div>

    )
}