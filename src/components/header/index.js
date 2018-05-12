/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

import logo from '../../assets/images/full-logo.png';

class Header extends Component {
   render() {
        return (
            <div class="navigation-header-container">

                <nav class="left-side">
                    <ul class="link-container">
                        <li><Link to="/"><img src={logo}/></Link></li>
                    </ul>
                </nav>

                <nav class="right-side">

                    <div class="items">
                        <a class="join-us float" href="github.com/8x-protocol/whitepaper">Join us on Telegram</a>
                        <a class="whitepaper float" href="github.com/8x-protocol/whitepaper">Whitepaper</a>
                    </div>
                    
                </nav>
            </div>
        )
   }
}

export default Header;