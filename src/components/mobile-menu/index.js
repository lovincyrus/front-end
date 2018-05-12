import React from "react";
import styles from './style.scss';

import { Link } from "react-router-dom";


export default ({ close }) => (
  <div class="menu">
    <ul>
      <li onClick={close}><a targe="_blank" href="https://docs.google.com/viewer?url=https://github.com/8x-protocol/whitepaper/raw/master/8x_protocol_whitepaper_v4.pdf">Whitepaper</a></li>
      <li onClick={close}><a targe="_blank" href="https://github.com/8x-protocol/">Github</a></li>
      <li onClick={close}><a targe="_blank" href="https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA">Telegram</a></li>
    </ul>
  </div>
);
