/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class EcosystemBox extends Component {
   render() {
        return (
            <div>

                <div class="box-header-container">
                    <img/>
                    <h4>{this.props.title}</h4>
                    {
                        this.props.features.map(function(text, index){
                            return (
                                <div>
                                    <img/>
                                    <p>{text}</p>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        )
   }
}

export default EcosystemBox;
