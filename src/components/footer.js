/* Import statements */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/full-logo.png';

class Footer extends Component {
  render() {
    return (
      <div className='navigation-footer-container'>
        <nav className='logo-container'>
          <img src={logo}/>
        </nav>

        <div className='sections-container'>
          <div className='footer-section'>
            <h4>Community</h4>
            <a style={{color: '#7D94DF'}} href='https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA'>Telegram</a>
            <a style={{color: '#000000'}} href='https://medium.com/8xprotocol'>Medium</a>
            <a style={{color: '#1EABF5'}} href='https://twitter.com/8x_protocol'>Twitter</a>
            <a style={{color: '#FD4E02'}} href='https://www.youtube.com/playlist?list=PLdm5dK5Ob2TnSUKlcYj3XfCO-iS8SeEfb'>Youtube</a>
          </div>

          <div className='footer-section'>
            <h4>Foundation</h4>
            <a style={{color: '#95959A'}} href='https://rawcdn.githack.com/8xprotocol/whitepaper/master/latest.pdf'>Whitepaper</a>
            <a style={{color: '#95959A'}} href='https://github.com/8xprotocol/'>Github</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;