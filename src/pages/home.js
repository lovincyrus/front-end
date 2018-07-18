/* Import statements */
import React from 'react';
import EcosystemBox from '../components/ecosystemBox';
import Subscribe from '../components/subscribe';
import PersonBox from '../components/personBox';
import TypistCycle from '../components/typist-cycle';

import {default as Images} from '../middleware/images';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='hero section'>
          <div className='container'>

            <div className='content-side'>
              <h1>Pay for your</h1>
              <TypistCycle
                content={[
                  'subscriptions',
                  'Netflix',
                  'Spotify',
                  'Rent',
                ]}
                numberOfCycles={-1} // loop indefinitely
                segmentDelay={1.2} // stop for 0.8s at end line
              />
              <h1>with crypto.</h1>

              <h6 className='description'>
                8x is a layer 2 Ethereum protocol that enables decentralised recurring payments.
              </h6>

              {/*<Subscribe/>*/}
            </div>

            <div className='image-side'>
              <img src={Images.subscriptionsiPhone}/>
            </div>

          </div>
        </div>
        <div className='hero-separator'>
          <img src={Images.waves}/>
        </div>
      </div>
    );
  }
}

export default Home;
