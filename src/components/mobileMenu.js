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
              href='/about'
              rel='noopener noreferrer'
            >
              About
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://rawcdn.githack.com/8xprotocol/whitepaper/master/latest.pdf'
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
              href='https://t.me/eightexprotocol'
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
