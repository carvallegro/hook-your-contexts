import React from 'react';

import {ColorContextProvider} from "./colorContext";

import VeryDeepNesting from "./VeryDeepNesting";
import ThemeSwitcher from "./ThemeSwitcher";

import './App.css';

const App = () => (
    <ColorContextProvider>
        <div className="App">
            <ThemeSwitcher/>
            <VeryDeepNesting/>
        </div>
    </ColorContextProvider>
);

export default App;
