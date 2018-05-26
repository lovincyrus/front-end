/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import Menu from './mobileMenu';
import BurgerIcon from './header/burgerIcon';

import logo from '../assets/images/full-logo.png';

const contentStyle = {
  background: 'rgba(255,255,255,0',
  width: '80%',
  border: 'none'
};

class Header extends Component {
  render() {
    return (
      <div className='navigation-header-container'>
        <nav className='left-side'>
          <ul className='link-container'>
            <li><Link to='/'><img src={logo}/></Link></li>
          </ul>
        </nav>

        <nav className='right-side'>
          <Popup
            modal
            overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>

          <div className='items'>
            <a
              className='join-us float'
              target='_blank'
              href='https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA'
              rel='noopener noreferrer'
            >
              Join us on Telegram
            </a>
            {/*<a className='whitepaper float' target='_blank' href='https://docs.google.com/viewer?url=https://github.com/8x-protocol/whitepaper/raw/master/8x_protocol_whitepaper_v4.pdf'>Whitepaper</a>*/}
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;