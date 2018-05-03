/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class TokenHoldersBox extends Component {
   render() {
        return (
            <div class="token-box-header-container">

                <div class="header-container">
                    <img class="icon" src={this.props.icon}/>
                    <h4>{this.props.title}</h4>
                </div>
                
                <div class="description-container">
                    <p>{this.props.description}</p>
                </div>

            </div>
        )
   }
}

export default TokenHoldersBox;
