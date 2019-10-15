import React from 'react'

import './ThemeSwitcher.css'
import { ColorContextConsumer } from '../colorContext'

const ThemeSwitcher = () => (
  <ColorContextConsumer>
    {value => (
      <div
        className={`theme-switch ${value.darkMode ? 'dark-theme' : ''}`}
        onClick={value.toggleDarkMode}
      >
        <div className="switch"></div>
      </div>
    )}
  </ColorContextConsumer>
)

export default ThemeSwitcher
