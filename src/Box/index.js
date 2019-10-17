import 'whatwg-fetch'
import React from 'react'

import { useDarkMode } from '../useDarkMode'

import './Box.css'

const Box = () => {
  const darkMode = useDarkMode()

  return (
    <div className={`Box ${darkMode ? 'night' : 'day'}`}>
      Good
      <br />
      {darkMode ? 'Night' : 'Day'}
    </div>
  )
}

export default Box
