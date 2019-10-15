import React, {useState} from 'react';

import {ColorContextProvider} from "./colorContext";

import VeryDeepNesting from "./VeryDeepNesting";
import ThemeSwitcher from "./ThemeSwitcher";

import './App.css';

const App = () => {
    const [isDarkMode, setDarkMode] =  useState(false)

    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    return (
        <ColorContextProvider value={{darkMode: isDarkMode, toggleDarkMode}}>
            <div className="App">
                <ThemeSwitcher/>
                <VeryDeepNesting/>
            </div>
        </ColorContextProvider>
    );
};

export default App;
