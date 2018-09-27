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
              href='https://docs.8xprotocol.com/'
              rel='noopener noreferrer'
            >
              Docs
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='/'
            >
              Demo
            </a>
          </li>
          <li onClick={this.close}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='/protocol-weekly'
            >
              Protocol Weekly
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
