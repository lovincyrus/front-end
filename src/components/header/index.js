/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

import logo from '../../assets/images/full-logo.png';

class Header extends Component {
   render() {
        return (
            <div class="navigation-header-container">
                <nav class="container">
                    <ul>
                        <li><Link to="/"><img src={logo}/></Link></li>
                    </ul>
                </nav>
            </div>
        )
   }
}

export default Header;