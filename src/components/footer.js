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
            <a className='hide-mobile' target='_blank' rel='noopener noreferrer' href='https://rawcdn.githack.com/8xprotocol/whitepaper/master/latest.pdf'><p>Whitepaper</p></a>
            <Link className='hide-mobile' to='/beta'><p>Beta</p></Link>
            <a className='hide-mobile' target='_blank' rel='noopener noreferrer' href='https://docs.8xprotocol.com/'><p>Docs</p></a>
          </div>

          <div className='footer-social'>
            <div className='items'>
              <a href='https://t.me/eightexprotocol' target="_blank" rel="noopener noreferrer"><img src={Images.telegramLogo}/></a>
              <a href='https://github.com/8xprotocol' target="_blank" rel="noopener noreferrer"><img src={Images.githubLogo}/></a>
              <a href='https://twitter.com/8x_Protocol' target="_blank" rel="noopener noreferrer"><img src={Images.twitterLogo}/></a>
              <a href='https://medium.com/8xprotocol' target="_blank" rel="noopener noreferrer"><img src={Images.mediumLogo}/></a>
              <a href='https://www.reddit.com/r/8xProtocol/' target="_blank" rel="noopener noreferrer"><img src={Images.redditLogo}/></a>
            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default Footer;