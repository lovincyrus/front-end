import React from 'react';
import {default as Images} from '../middleware/images';
import TypistCycle from '../components/typist-cycle';

class HomeRevised extends React.Component {

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

              <div className='description'>
                <h3>8x is a protocol built on Ethereum </h3>
                <h3>that enables decentralised </h3>
                <h3>repeating payments.</h3>
              </div>

              <div className='buttons'>
                <div className='whitepaper cta' target='_blank' rel='noopener noreferrer' href='https://rawcdn.githack.com/8xprotocol/whitepaper/master/latest.pdf'>
                  <p>Read our Whitepaper</p>
                </div>
                <div className='video cta'target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=ajJk2W6VF4E'>
                  <img src={Images.buttonplay} width="13" height="16"/>
                  <p>Watch Video</p>
                </div>
              </div>
            </div>

            <div className='image-side'>
              <img src={Images.iPhoneX}/>
            </div>

          </div>
        </div>

        <div className='features section'>
          <div className='container'>
            <div className='sub-heading'>
              <a>Subscription payments are finally coming to Ethereum</a>
            </div>
            
            <div className='list-container'>    
              <div className='leftside'>
                <img src={Images.netflixsubscription} width="630" height="532"/>
              </div>
              <div className='right-side'>
                <div className='sub-headings'>
                  <h5> Direct Debit </h5>
                  <h6>Tokens are taken directly from a user’s wallet. No escrow account or advanced upfront payments required.</h6>
                </div>
                <div className='sub-headings'>
                  <h5> Zero Volatility </h5>
                  <h6>Through the use of stable coins (DAI), volatility can be eliminated for users and businesses. 8x is ERC20 agnostic.</h6>
                </div>
                <div className='sub-headings'>
                  <h5> Execution </h5>
                  <h6>A network of distributed service nodes run by token holders ensure payments are collected on-time.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='partner section'>
          <div className='container'>
            <div className='heading'>
              <a> We&apos;ve partnered with</a>
            </div>

            <div className='logos-container'>
              <img className='tenz' src={Images.tenzLogo}/>
              <img className='MKR' src={Images.MKRLogo}/>
              <img className='bitfwd' src={Images.bitfwdLogo}/>
            </div>
          </div>
        </div>

      </div>
    );
  };
}

export default HomeRevised;