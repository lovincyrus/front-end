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
        <div className='logo'>
          <div className='left-side'>
            <Link to='/'><img src={logo}/></Link>     
          </div>
        </div>
      
        <div className='menu'>
          <Link className='hide-mobile' to='/about'>About</Link>
          <Link className='hide-mobile' to='/token-sale'>Token Sale</Link>
          <Link className='hide-mobile' to='/protocol-weekly'>Protocol Weekly</Link>
        </div>

        <div className='social'>
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
            <a href='https://t.me/eightexprotocol'><img src={Images.telegramLogo}/></a>
            <a href='https://github.com/8xprotocol'><img src={Images.githubLogo}/></a>
            <a href='https://twitter.com/8x_Protocol'><img src={Images.twitterLogo}/></a>
            <a href='https://medium.com/8xprotocol'><img src={Images.mediumLogo}/></a>
            <a href='https://www.reddit.com/r/8xProtocol/'><img src={Images.redditLogo}/></a>
          </div>
        </div>
      </div>
    );
  };
}
export default Header;