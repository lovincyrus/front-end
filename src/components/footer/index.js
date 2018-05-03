/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

import logo from '../../assets/images/full-logo.png';

class Footer extends Component {
   render() {
        return (
            <div class="navigation-footer-container">
                <nav class="container">
                    <img src={logo}/>
                </nav>
            </div>
        )
   }
}

export default Footer;