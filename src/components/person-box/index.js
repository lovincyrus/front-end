/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class PersonBox extends Component {
   render() {
        return (
            <div class="person-container" style={{ backgroundImage: `url(${this.props.photo})`, backgroundPosition: 'center' }}>
                <div class="overlay">
                    <div class="content-container">
                        <p class="description">{this.props.description}</p>
                        <p class="heading">{this.props.name}</p>
                    </div>
                </div>
            </div>
        )
   }
}

export default PersonBox;