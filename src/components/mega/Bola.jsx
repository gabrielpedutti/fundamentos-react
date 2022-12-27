import "./Bola.css"
import React from 'react'

export default props => {
    const randomColor
        = '#' + Math.floor(Math.random() * 16777215).toString(16)
    return (
        <div className="Bola" style={{backgroundColor: randomColor}}>
            {props.numero}
        </div>
    )
}