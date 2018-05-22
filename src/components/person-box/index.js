/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class PersonBox extends Component {
   render() {
        return (
            <div class="person-container" style={{ backgroundImage: `url(${this.props.photo})`, backgroundPosition: 'center' }}>
                <a class="overlay" href={this.props.linkedIn} target="_blank">
                    <div class="content-container">
                        <p class="description">{this.props.description}</p>
                        <p class="heading">{this.props.name}</p>
                    </div>
                </a>
            </div>
        )
   }
}

export default PersonBox;