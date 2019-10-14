import React from 'react'
import PropTypes from 'prop-types'
import {ColorContextConsumer} from "../colorContext";

import './Box.css';

const Box = () =>
    <ColorContextConsumer>
        {value =>
            <div className={`Box ${value.darkMode ? 'night' : 'day'}`}>
                Good<br/>
                {
                    value.darkMode ? 'Night' : 'Day'
                }
            </div>
        }
    </ColorContextConsumer>


export default Box
