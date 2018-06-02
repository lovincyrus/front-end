import React from 'react';

import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close() {
    this.props.close;
  }

  render() {
    return(
      <div className='menu'>
        <ul>
          <li onClick={this.close}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='/'
            >
              Home
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              href='https://github.com/8x-protocol/'
              rel='noopener noreferrer'
            >
              FAQ
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://docs.google.com/viewer?url=https://github.com/8x-protocol/whitepaper/raw/master/8x_protocol_whitepaper_v6.pdf'
            >
              Whitepaper
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              href='https://www.youtube.com/playlist?list=PLdm5dK5Ob2TnSUKlcYj3XfCO-iS8SeEfb'
              rel='noopener noreferrer'
            >
              Token Sale
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              href='https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA'
              rel='noopener noreferrer'
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    );
  };
}

export default Menu;
