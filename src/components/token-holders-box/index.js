/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class TokenHoldersBox extends Component {
   render() {
        return (
            <div>

                <div class="box-header-container">
                    <img/>
                    <h4>{this.props.title}</h4>
                </div>
                
                <div class="box-description-container">
                    <p>{this.props.description}</p>
                </div>

            </div>
        )
   }
}

export default TokenHoldersBox;
