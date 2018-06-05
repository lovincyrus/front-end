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
              rel='noopener noreferrer'
              href='/'
            >
              Home
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              href='https://medium.com/8xprotocol/8x-protocol-frequently-asked-questions-faq-76874d6273d7'
              rel='noopener noreferrer'
            >
              FAQ
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://rawcdn.githack.com/8x-protocol/whitepaper/master/latest.pdf'
            >
              Whitepaper
            </a>
          </li>
          <li onClick={this.close}>
            <a
              href='/token-sale'
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
