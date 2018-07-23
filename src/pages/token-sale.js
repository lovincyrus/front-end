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
              <Subscribe/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TokenSale;
