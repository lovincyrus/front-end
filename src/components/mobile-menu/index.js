import React from "react";
import styles from './style.scss';

import { Link } from "react-router-dom";


export default ({ close }) => (
  <div class="menu">
    <ul>
      <li onClick={close}><a targe="_blank" href="https://docs.google.com/viewer?url=https://github.com/8x-protocol/whitepaper/raw/master/8x_protocol_whitepaper_v5.pdf">Whitepaper</a></li>
      <li onClick={close}><a targe="_blank" href="https://github.com/8x-protocol/">Github</a></li>
      <li onClick={close}><a targe="_blank" href="https://t.me/joinchat/AXlpZ1LUmBqu3ySXHVh8qA">Telegram</a></li>
      <li onClick={close}><a targe="_blank" href="https://www.youtube.com/playlist?list=PLdm5dK5Ob2TnSUKlcYj3XfCO-iS8SeEfb">Daily Vlogs</a></li>
    </ul>
  </div>
);
