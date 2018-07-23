/* Import statements */
import React from 'react';
import Subscribe from '../components/subscribe';

class TokenSale extends React.Component {
  render() {
    return (
      <div>
        <div className='coming-soon section'>
          <div className='content'>
            <h1>Coming Soon...</h1>
            <p>Stay tuned for more details</p>
            <div className='subscribe-box'>
              <Subscribe url={'https://8xprotocol.us18.list-manage.com/subscribe/post?u=a6505d4982ebb2a66c4f9dcea&amp;id=7a717337e6'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TokenSale;
