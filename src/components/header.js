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
          <Link to='/'><img src={this.props.theme == 'light' ? Images.fullLogo : Images.whiteLogo }/></Link>
        </div>

        <div className='web-menu'>
          <Link className='hide-mobile' to='/'><p>Home</p></Link>
          <Link className='hide-mobile' to='/'><p>Demo</p></Link>
          <a className='hide-mobile' href='https://docs.8xprotocol.com/'><p>Docs</p></a>
          <Link className='hide-mobile' to='/protocol-weekly'><p>Protocol Weekly</p></Link>
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
            <a href='https://t.me/eightexprotocol'>
              <img src={Images.telegramLogo}/>
            </a>
            <a href='https://github.com/8xprotocol'>
              <img src={Images.githubLogo}/>
            </a>
            <a href='https://twitter.com/8x_Protocol'>
              <img src={Images.twitterLogo}/>
            </a>
            <a href='https://medium.com/8xprotocol'>
              <img src={Images.mediumLogo}/>
            </a>
            <a href='https://www.reddit.com/r/8xProtocol/'>
              <img src={Images.redditLogo}/>
            </a>
          </div>
        </div>
      </div>
    );
  };
}
export default Header;