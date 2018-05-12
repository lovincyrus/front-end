/* Import statements */
import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

import styles from './style.scss';

const url = "https://8xprotocol.us18.list-manage.com/subscribe/post?u=a6505d4982ebb2a66c4f9dcea&amp;id=7a717337e6";

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  
    return (
      <div class="email-form">
        {status === "sending" && <div style={{ color: "gray" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "black" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          class="card email"
          ref={node => (email = node)}
          type="email"
          placeholder="Your email address"
        />
        <br />
        <button class="button submit" onClick={submit}>
          Submit
        </button>
      </div>
    );
}

class Subscribe extends Component {
   render() {
        return (
            <div class="subscribe-container">
                <p class="heading">Stay up to date with our developments</p>
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        )
   }
}

export default Subscribe;