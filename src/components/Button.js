import React from 'react'
import './Button.css'

//Represents a re-usable button component in three sizes.
const Button = (props) => {

    //Represents whether we are using the small or large version.
    const large = props.large;

    const customColor = () => {
        return props.color ? style : null;
    }

    const style = {
        backgroundColor: props.color
    }

    return (
        <button id='btn' style={customColor()} className={large ? 'button large' : 'button'}>
            {props.text}
        </button>
    )
}

export default Button