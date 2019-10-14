import React from 'react';
import Box from "./Box";

import {ColorContextProvider} from "./colorContext";

import './App.css';

const App = () => (
    <div className="App">

        <ColorContextProvider value={{darkMode: false}}>
            <Box/>
        </ColorContextProvider>

        <ColorContextProvider value={{darkMode: true}}>
            <Box/>
        </ColorContextProvider>

    </div>
);

export default App;
