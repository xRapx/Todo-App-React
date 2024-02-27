import {  createContext, useState} from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	const [themes, setThemes] = useState('')
	

    const toggleTheme = () => {		 
      setThemes(theme => theme === "light" ? "dark" : "light")
    }

	const value = {
		themes,
        toggleTheme
	}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export  {ThemeContext, ThemeProvider};