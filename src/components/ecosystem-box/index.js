/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class EcosystemBox extends Component {
   render() {
        return (
            <div class="ecosystem-box-header-container card">

                <div class="header-container">
                    <img class="header-image" src={this.props.header}/>
                    <h4>{this.props.title}</h4>
                </div>
                {this.processFeatures()}

            </div>
        )
   }


   processFeatures() {
        let tickImage = this.props.tick;
        return this.props.features.map(function(text, index){
            return (
                <div class="feature-container">
                    <img class="tick-image" src={tickImage}/>
                    <p>{text}</p>
                </div>
            );
        })
   }
}

export default EcosystemBox;
