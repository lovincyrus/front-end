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
            <li>
              <Link to='/'><img src={logo}/></Link>
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
            <a><img src={Images.github}/></a>
            <a><img src={Images.reddit}/></a>
            <a><img src={Images.twitter}/></a>
            <a><img src={Images.medium}/></a>
            <a><img src={Images.telegram}/></a>
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;