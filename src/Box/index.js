import 'whatwg-fetch'
import React, { useState, useEffect } from 'react'
import './Box.css'

const Box = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        window
          .fetch('https://yesno.wtf/api')
          .then(response => response.json())
          .then(yesOrNo => setDarkMode(yesOrNo.answer === 'yes')),
      5000
    )

    return () => clearInterval(intervalId)
  })

  return (
    <div
      className={`Box ${darkMode ? 'night' : 'day'}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      Good
      <br />
      {darkMode ? 'Night' : 'Day'}
    </div>
  )
}

export default Box
