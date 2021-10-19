import React from 'react'
import './Card.css'

class Card extends React.Component {

    //Constructs a new Card component.
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card__container">
                <div className="card__heading">
                    <h3>{this.props.title}</h3>
                    <img src={this.props.imagePath}/>
                </div>
                <p>{this.props.subtitle}</p>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Card
