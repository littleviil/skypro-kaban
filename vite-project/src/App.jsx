import { GlobalStyle } from "./global.styled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "././theme.js";
import AppRoutes from './AppRoutes.jsx';
import {useState} from "react";

function App() {
	const [isDarkTheme, setDarkTheme] = useState(false);
	return (
        <ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
            <GlobalStyle/>
            <AppRoutes darkTheme={isDarkTheme} setDarkTheme={setDarkTheme}/>
        </ThemeProvider>
    );
}

export default App