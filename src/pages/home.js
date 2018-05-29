/* Import statements */
import React from 'react';
import {Images} from '../middleware/images';

import EcosystemBox from '../components/ecosystemBox';
import Subscribe from '../components/subscribe';
import PersonBox from '../components/personBox';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='hero section'>
          <div className='container'>
            <div className='image-side'>
              <img src={Images.diagram}/>
            </div>

            <div className='content-side'>
              <h1>Recurring stable payments on the blockchain.</h1>

              <p className='description'>
                Decentralised recurring cryptocurrency payments powered by
                Ethereum smart contracts and stable coin technology.
              </p>

              <Subscribe/>
            </div>
          </div>
        </div>

        <div className='what section-alt'>
          <div className='container'>
            <div className='header-container'>
              <img src={Images.coins}/>

              <h1>What is 8x?</h1>
            </div>

            <h5>
              8x is a protocol for facilitating recurring crypto payments
              without exposing consumers or businesses to the volatility of
              crypto currencies. McKinsey estimates the subscription economy
              will be worth over $500B by 2020 with 80% of software products
              & services moving to a subscription model.
            </h5>

            <img className='preview-image' src={Images.subscriptionsPreview}/>
          </div>
        </div>

        <div className='how section'>
          <div className='container'>
            <div className='header-container'>
              <img src={Images.cash}/>
              <h1 className='center-text'>How does it work?</h1>
            </div>

            <h5 className='description'>
              The following flow is shown once a user has given the protocol
              permission to transfer stable coins on their behalf.
              1 stable coin = $1 USD.
            </h5>

            <img className='overview-image' src={Images.overview}/>
          </div>
        </div>

        <div className='why section-alt'>
          <div className='container'>
            <div className='header-container'>
              <h1 className='center-text'>Why the 8x token?</h1>
            </div>

            <h5 className='description'>
              Businesses and users have no utility with the 8x token
              <br/>
              as it is only required to operate a service node in the
              network.
            </h5>

            <div className='reasons-container'>
              <div className='reason'>
                <img className='icon' src={Images.desk}/>
                <p>
                  8x tokens are required to be staked in order to run
                  service nodes. This in turns allows token holders to
                  earn a fee from every transaction executed by them.
                  The larger the transaction, the more 8x tokens are
                  required.
                </p>
              </div>

              <div className='reason'>
                <img className='icon' src={Images.platform}/>
                <p>
                  Token holders can set the strategy they would like to
                  play in order to claim subscriptions. High risk, high
                  reward? Or balanced risk with consistent returns?
                </p>
              </div>

              <div className='reason'>
                <img className='icon' src={Images.chip}/>
                <p>
                  Service nodes earn in the stable coin being transacted,
                  not 8x tokens. In addition, gas costs are pre-paid by
                  the user so extra costs do not have to be factored into
                  expected profts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='ecosystem section'>
          <div className='container'>
            <div className='header-container'>
              <h1 className='center-text'>Ecosystem</h1>
              <h5>
                The 8x protocol requires an ecosystem of businesses,
                consumers and token holders in order to operate.
              </h5>
            </div>

            <div className='items'>
              <EcosystemBox
                header={Images.businessIcon}
                tick={Images.redCheckmark}
                title='Businesses'
                features={[
                  'Zero volatility through the use of Dai stable coin',
                  'Set your own transaction fee based on your business model',
                  'Easy to implement SDKs'
                ]}
              />
              <EcosystemBox
                header={Images.userIcon}
                tick={Images.yellowCheckmark}
                title='Users'
                features={[
                  'Zero volatility through the use of Dai stable coin',
                  'Manage all your subscriptions through one interface',
                  'Your funds always stay with you, in your control'
                ]}
              />
              <EcosystemBox
                header={Images.tokenHoldersIcon}
                tick={Images.greenCheckmark}
                title='Token Holders'
                features={[
                  'Earn by processing transactions on the network',
                  'Select your service node\'s strategy'
                ]}
              />
            </div>
          </div>
        </div>

        <div className='team section'>
          <div className='container'>
            <div className='header-container'>
              <h1 className='center-text' style={{color: 'white'}}>Who are we?</h1>
            </div>

            <div className='people'>
              <PersonBox
                name='Kerman'
                description='Engineering'
                photo={Images.kerman}
                linkedIn='https://www.linkedin.com/in/kermankohli/'
              />
              <PersonBox
                name='Travis'
                description='Engineering'
                photo={Images.travis}
                linkedIn='https://www.linkedin.com/in/travis-mathis-43443b16/'
              />
              <PersonBox
                name='Kevin L.'
                description='Marketing'
                photo={Images.kevinL}
                linkedIn='https://www.linkedin.com/in/kevin-lu-a95017147/'
              />
              <PersonBox
                name='Renee'
                description='Marketing (Mandarin)'
                photo={Images.renee}
                linkedIn='https://www.linkedin.com/in/reneezsr/'
              />
              <PersonBox
                name='Andy'
                description='Community'
                photo={Images.andy}
                linkedIn='https://www.linkedin.com/in/andy-chen-fang/'
              />
              <PersonBox
                name='Kevin Z.'
                description='Operations'
                photo={Images.kevinZ}
                linkedIn='https://www.linkedin.com/in/kevin-zheng-04470a58/'
              />
              <PersonBox
                name='Rob'
                description='Advisor'
                photo={Images.rob}
                advisor={true}
                linkedIn='https://www.linkedin.com/in/robmorris/'
              />
              <PersonBox
                name='Daniel'
                description='Advisor'
                photo={Images.daniel}
                advisor={true}
                linkedIn='https://www.linkedin.com/in/dtbar/'
              />
              <PersonBox
                name='Kamal'
                description='Advisor'
                photo={Images.kamal}
                advisor={true}
                linkedIn='https://www.linkedin.com/in/kamalsarma/'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
