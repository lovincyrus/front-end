/* Import statements */
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated, backgroundColor }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className='email-form'>
      
      {status === 'sending' && (
        <div style={{ color: 'gray' }}>
          sending...
        </div>
      )}
      {status === 'error' && (
        <div style={{ color: 'red' }}>
          <p>{message}</p>
        </div>
      )}
      {status === 'success' && (
        <div style={{ color: '#5944EE' }}>
          <p>{message}</p>
        </div>
      )}

      <div className='box' style={{backgroundColor: backgroundColor}}>

        <input
          className='card email'
          ref={node => (email = node)}
          type='email'
          placeholder='Enter your Email Address'
        />

        <button className='button submit' onClick={submit}>
          Subscribe
        </button>

      </div>

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
              backgroundColor={this.props.backgroundColor}
            />
          )}
        />
      </div>
    );
  }
}

export default Subscribe;