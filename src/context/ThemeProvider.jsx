import { useState, createContext, useContext } from "react";
import { changeCssVariables } from "../services/changeCssVariables";
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@constants/themeSides';


const ThemeContext = createContext();

export const ThemeProvider = ({children, ...props}) => {

    const [theme, setTheme] = useState(THEME_NEUTRAL);

    const change = name => {
        setTheme(name);
        changeCssVariables(name);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);