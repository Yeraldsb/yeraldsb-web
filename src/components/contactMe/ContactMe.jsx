import React, {useContext, useRef, useState} from "react";
import './contactMe.css'
import gafas from '../../assets/imgs/gafas.png'
import emailjs from 'emailjs-com';
import {ThemeContext} from "../../context";
import girl from '../../assets/imgs/girl-phone.png'


export default function ContactMe() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ow3bmbe',
            'template_3j6pf42',
            formRef.current,
            'user_VbOoyTA0WIZbQRwDfcw3L'
        )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">I’d love to hear from you!</h1>
                    <div className="-info">
                        <div className="c-info-item">
                            <img src={gafas}
                                 alt=""
                                 className="c-icon"
                            />
                            6434155
                        </div>

                        <div className="c-info-item">
                            <img src={gafas}
                                 alt=""
                                 className="c-icon"
                            />
                            pamelasb9412@gmail.com

                        </div>

                        <div className="c-info-item">
                            <img src={gafas}
                                 alt=""
                                 className="c-icon"
                            />
                            Barcelona
                        </div>
                    </div>
                </div>


                <div className="c-right">
                    <p className="c-des">
                        <b>Dropping a line to say g’day</b>, ask for my resume or see if we can build something
                        amazing together?
                    </p>


                    <form ref={formRef} className="c-form" onSubmit={handleSubmit}>
                        <h3 className="c-h3-title">Send a Message</h3>

                        <input
                            style={{ backgroundColor: darkMode && "#333" }}
                            name="user_name"
                            placeholder="Name"
                            type="text"
                            className="c-inputs"
                            required
                        />

                        <input
                            style={{ backgroundColor: darkMode && "#333" }}
                            name="user_subject"
                            placeholder="Subject"
                            type="text"
                            className="c-inputs"
                            required
                        />

                        <input
                            style={{ backgroundColor: darkMode && "#333" }}
                            name="user_email"
                            placeholder="Email address"
                            type="text"
                            className="c-inputs email"
                            required
                        />
                        <img src={girl} alt="" className="c-img-phone"/>
                        <textarea
                            style={{ backgroundColor: darkMode && "#333" }}
                            placeholder="Message"
                            rows="6"
                            required
                            name="message"
                            className="c-textarea"

                        >
                            </textarea>


                        <button className="c-btn" type="submit">Submit</button>
                        {done && "Thanks for the message, I´ll reply ASAP :)"}
                    </form>
                </div>
            </div>
        </div>
    )
}