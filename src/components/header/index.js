/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Menu from "../mobile-menu";
import BurgerIcon from "./burger-icon";

import styles from './style.scss';

import logo from '../../assets/images/full-logo.png';

const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
  };

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

                    <Popup
                        modal
                        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                        contentStyle={contentStyle}
                        closeOnDocumentClick={false}
                        trigger={open => <BurgerIcon open={open} />} 
                    >
                        {close => <Menu close={close} />}
                    </Popup>

                    <div class="items">
                        <a class="join-us float" target="_blank" href="https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA">Join us on Telegram</a>
                        {/*<a class="whitepaper float" target="_blank" href="https://docs.google.com/viewer?url=https://github.com/8x-protocol/whitepaper/raw/master/8x_protocol_whitepaper_v4.pdf">Whitepaper</a>*/}
                    </div>
                    
                </nav>
            </div>
        )
   }
}

export default Header;