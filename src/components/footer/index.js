/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.scss';

import logo from '../../assets/images/full-logo.png';

class Footer extends Component {
   render() {
        return (
            <div class="navigation-footer-container">

                <nav class="logo-container">
                    <img src={logo}/>
                </nav>

                <div class="sections-container">

                    <div class="footer-section">
                        <h4>Community</h4>
                        <a style={{color: '#7D94DF'}} href="https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA">Telegram</a>
                        <a style={{color: '#000000'}} href="https://medium.com/8x-protocol">Medium</a>
                        <a style={{color: '#1EABF5'}} href="https://twitter.com/8x_protocol">Twitter</a>
                        <a style={{color: '#FD4E02'}} href="https://www.youtube.com/playlist?list=PLdm5dK5Ob2TnSUKlcYj3XfCO-iS8SeEfb">Youtube</a>
                    </div>

                    <div class="footer-section">
                        <h4>Foundation</h4>
                        <a style={{color: '#95959A'}}>Whitepaper</a>
                        <a style={{color: '#95959A'}}>Github</a>
                    </div>

                </div>

            </div>
        )
   }
}

export default Footer;