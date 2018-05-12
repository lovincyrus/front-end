/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class PersonBox extends Component {
   render() {
        return (
            <div class="person-container">
                <img src={this.props.photo}/>
                <h6>{this.props.name}</h6>
                <p>{this.props.description}</p>
            </div>
        )
   }
}

export default PersonBox;