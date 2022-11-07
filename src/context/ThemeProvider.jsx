import { useState, createContext, useContext } from "react";
import { changeCssVariables } from "../services/changeCssVariables";

const ThemeContext = createContext();

export const ThemeProvider = ({children, ...props}) => {

    const [theme, setTheme] = useState(null);

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