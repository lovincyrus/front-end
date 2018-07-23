/* Import statements */
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className='email-form'>
      {status === 'sending' && <div style={{ color: 'gray' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'black' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        className='card email'
        ref={node => (email = node)}
        type='email'
        placeholder='Your email address'
      />
      <br />
      <button className='button submit' onClick={submit}>
        Subscribe
      </button>
    </div>
  );
};

class Subscribe extends React.Component {
  render() {
    return (
      <div className='subscribe-container'>
        <MailchimpSubscribe
          url={this.props.url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Subscribe;