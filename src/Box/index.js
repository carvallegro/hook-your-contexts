import React from 'react'
import PropTypes from 'prop-types'
import './Box.css'

const Box = ({ darkMode }) => (
  <div className={`Box ${darkMode ? 'night' : 'day'}`}>
    Good
    <br />
    {darkMode ? 'Night' : 'Day'}
  </div>
)

Box.propTypes = {
  darkMode: PropTypes.bool
}

export default Box
