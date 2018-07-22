/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Popup from 'reactjs-popup';

import Menu from './mobileMenu';
import BurgerIcon from './header/burgerIcon';

import logo from '../assets/images/full-logo.png';
import {default as Images} from '../middleware/images';

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
            <li className='links'>
              <Link to='/'><img src={logo}/></Link>
              <Link className='hide-mobile' to='/'>Home</Link>
              <Link className='hide-mobile' to='/about'>About</Link>
              <Link className='hide-mobile' to='/token-sale'>Token Sale</Link>
            </li>
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
            <a href='https://t.me/eightexprotocol'><img src={Images.telegram}/></a>
            <a href='https://github.com/8xprotocol'><img src={Images.github}/></a>
            <a href='https://twitter.com/8x_Protocol'><img src={Images.twitter}/></a>
            <a href='https://medium.com/8xprotocol'><img src={Images.medium}/></a>
            <a href='https://www.reddit.com/r/8xProtocol/'><img src={Images.reddit}/></a>
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;