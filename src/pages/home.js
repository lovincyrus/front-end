/* Import statements */
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Subscribe from '../components/subscribe';
import PersonBox from '../components/personBox';
import TypistCycle from '../components/typist-cycle';
import FeatureBox from '../components/feature-box';

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
                  'Subscriptions',
                  'Netflix',
                  'Spotify',
                  'Rent',
                  'Insurance',
                  'Loans'
                ]}
                numberOfCycles={-1} // loop indefinitely
                segmentDelay={1.2} // stop for 0.8s at end line
              />
              <h1>with crypto.</h1>

              <h3 className='description'>
                8x is a protocol built on Ethereum that enables decentralised repeating payments.
              </h3>

              <div className='buttons'>
                <div className='whitepaper cta white'>
                  <a target='_blank' rel='noopener noreferrer' href='https://rawcdn.githack.com/8xprotocol/whitepaper/master/latest.pdf'><p>Whitepaper</p></a>
                </div>
                <div className='video cta'>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=ajJk2W6VF4E'><p>Watch Video</p></a>
                </div>
              </div>
            </div>

            <div className='image-side'>
              <img src={Images.subscriptionsiPhone}/>
            </div>

          </div>
        </div>

        <div className='hero-separator'>
          <img src={Images.waves}/>
        </div>

        <div className='preauth section'>
          <div className='container'>
            <div className='image'>
              <img src={Images.preauth}/>
            </div>
            <div className='description'>
              <h1>Repeating Payments</h1>
              <h4 className='subheading'>Commerce is about ongoing relationships. With 8x you can authorise a business to automatically take an approved amount each period so you don&apos;t have to manually pay.</h4>
            </div>
          </div>
        </div>

        <div className='partnership section'>
          <div className='container'>
            <h2 className='text'>We’re partnered with</h2>
            <img className='maker' src={Images.makerWhite}/>
            <img className='bitfwd' src={Images.bitfwdWhite}/>
          </div>
        </div>

        <div className='why section'>
          <div className='container'>
            <h1>Why 8x?</h1>
            <div className='items-container'>
              <FeatureBox
                title={'Direct Debit'}
                description={`Tokens are taken directly from a user’s wallet.
                No escrow account or advanced upfront payments required.`}
                icon={Images.man}
                color={'#F5A623'}/>
              <FeatureBox
                title={'Zero Volatility'}
                description={`Through the use of stable coins (DAI),
                volatility can be eliminated for users and businesses.
                8x is ERC20 agnostic.`}
                icon={Images.cash}
                color={'#94B83D'}/>
              <FeatureBox
                title={'Execution'}
                description={`A network of distributed service nodes
                run by token holders ensure payments are collected on-time.`}
                icon={Images.node}
                color={'#A2AEBC'}/>
            </div>
          </div>
        </div>

        <div className='newsletter section'>
          <div className='container'>
            <div className="subscribe side">
              <h3 className='heading white'>Subscribe to Protocol Weekly.</h3>
              <p className='label white'>Weekly updates from Ethereum exclusive protocols.</p>
              <Subscribe/>
            </div>
            <div className='logo side'>
              <img src={Images.protocolGreyLogo}/>
              <img src={Images.civicGreyLogo}/>
              <img src={Images.dharmaGreyLogo}/>
              <img src={Images.bloomGreyLogo}/>
              <img src={Images.abacusGreyLogo}/>
              <img src={Images.liquidityGreyLogo}/>
            </div>
          </div>
        </div>

        <div className='payment section'>
          <div className='container'>
            <div className='pay-with-side'>
              <p className='label'>Pay with:</p>
              <div className='items-container'>
                <img src={Images.visa}/>
                <img src={Images.mastercard}/>
                <img src={Images.paypal}/>
                <img src={Images.protocolCard}/>
              </div>
            </div>
            <div className='description'>
              <h1>The future of payments.</h1>
              <h4 className='subheading'>More than 50% of crypto users are between the ages of 18-33 years old.</h4>
            </div>
          </div>
        </div>

        <div className='team section'>
          <div className='container'>
            <Link to='/about'>
              <h1>We&apos;re real people.</h1>
              <h1>Learn about our journey {'>'}</h1>
              <h4 className='description center-text'>
                We&apos;ve been asked &apos;is recurring crypto payments even a problem?&apos;<br/>
                Here&apos;s our answer.
              </h4>
            </Link>
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
