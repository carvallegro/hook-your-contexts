import React, {createContext, useState} from 'react'

const ColorContext = createContext()

export const ColorContextConsumer = ColorContext.Consumer

export const ColorContextProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    return <ColorContext.Provider value={{darkMode: isDarkMode, toggleDarkMode}}>
        {children}
    </ColorContext.Provider>
}

