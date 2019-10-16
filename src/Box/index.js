import React, {useState} from 'react'
import './Box.css'

const Box = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div
            className={`Box ${darkMode ? 'night' : 'day'}`}
            onClick={() => setDarkMode(!darkMode)}>
            Good
            <br/>
            {darkMode ? 'Night' : 'Day'}
        </div>
    );
}

export default Box
