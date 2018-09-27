/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/full-logo.png';
import {default as Images} from '../middleware/images';

class Footer extends Component {
  render() {
    return (
      <div className='navigation-footer-container'>
        <div className='footer-container container'>

          <div className='footer-menu'>
            <Link className='hide-mobile' to='/'>Demo</Link>
            <a className='hide-mobile' href='https://docs.8xprotocol.com/'>Docs</a>
            <Link className='hide-mobile' to='/protocol-weekly'>Protocol Weekly</Link>
          </div>

          <div className='footer-social'>
            <div className='items'>
              <a href='https://t.me/eightexprotocol'><img src={Images.telegramLogo}/></a>
              <a href='https://github.com/8xprotocol'><img src={Images.githubLogo}/></a>
              <a href='https://twitter.com/8x_Protocol'><img src={Images.twitterLogo}/></a>
              <a href='https://medium.com/8xprotocol'><img src={Images.mediumLogo}/></a>
              <a href='https://www.reddit.com/r/8xProtocol/'><img src={Images.redditLogo}/></a>
            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default Footer;