import React from 'react';
import './AboutGrid.css'

/**
 * The AboutGrid exposes a few bits of miscellaneous information regarding customer satisfaction,
 * service-provider insurance, etc.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function AboutGrid(props) {
    return (
        <div className='grid__container'>
            <h1>Guests have fun at good events. But guests <i>remember</i> great events.</h1>
        </div>
    );
}

export default AboutGrid;