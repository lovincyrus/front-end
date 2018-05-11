/* Import statements */
import React, { Component } from 'react';

import styles from './style.scss';

class Subscribe extends Component {
   render() {
        return (
            <div class="subscribe-container">
                <p class="heading">Stay up to date with our developments</p>
                <form class="email-form">
                    <input class="card email" type="text" name="email" placeholder="Your email address"/>
                    <input class="button submit" type="submit" value="Done"/>
                </form>
            </div>
        )
   }
}

export default Subscribe;