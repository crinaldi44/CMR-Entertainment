import React from 'react'
import './Card.css'

class Card extends React.Component {

    //Constructs a new Card component.
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card__container">
                <img src={this.props.imagePath}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.subtitle}</p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Card
