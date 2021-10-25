import Intro from "./components/intro/Intro";
import {AboutMe} from "./components/aboutMe/AboutMe";
import ProductList from "./components/productList/ProductList";
import {ThemeContext} from "./context";
import React, {useContext} from "react";
import Toggle from "./components/toggle/Toggle";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";
import Wave from "./components/wave/Wave";



function App() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
            <Toggle />
            <Intro/>
            <AboutMe />
            <ProductList />
            <ContactMe />
            <Wave />
            <Footer />
        </div>
    );
}

export default App;
