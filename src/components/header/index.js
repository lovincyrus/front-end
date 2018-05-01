/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

class Header extends Component {
   render() {
        return (
            <nav class="navigation-header-container">
                <div class="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </nav>
        )
   }
}

export default Header;