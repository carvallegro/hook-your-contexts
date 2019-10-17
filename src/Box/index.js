import 'whatwg-fetch'
import React, { useState, useEffect } from 'react'
import './Box.css'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        window
          .fetch('https://yesno.wtf/api')
          .then(response => response.json())
          .then(yesOrNo => setDarkMode(yesOrNo.answer === 'yes')),
      3000
    )

    return () => clearInterval(intervalId)
  })

  return darkMode
}

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
