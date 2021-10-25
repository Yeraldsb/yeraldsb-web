import Intro from "./components/intro/Intro";
import {AboutMe} from "./components/aboutMe/AboutMe";
import ProductList from "./components/productList/ProductList";
import {ThemeContext} from "./context";
import {useContext} from "react";
import Toggle from "./components/toggle/Toggle";



function App() {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
            <Toggle />
            <Intro/>
            <AboutMe />
            <ProductList />
        </div>
    );
}

export default App;
