/* Import statements */
import React from 'react';
import Subscribe from '../components/subscribe';
import PersonBox from '../components/personBox';
import TypistCycle from '../components/typist-cycle';
import FeatureBox from '../components/feature-box';

import {default as Images} from '../middleware/images';

class About extends React.Component {
  render() {
    return (
      <div>

        <div className='how-it-started section'>
          <div className='section'>
            <h1>How it all started</h1>
            <p>
              At the age of 12, Kerman started coding iOS apps.
              When he was 14, he wanted an easy to use app that
              would let him remember his homework.
              So, he developed The Homework App.
              Till date it’s been downloaded over 2,000,000+ times,
              has 50,000 monthly users and featured on prominent
              news outlets.
            </p>
            <div className='screenshots-container'>
              <img/>
              <img/>
              <img/>
            </div>
            <div className='media-container'>
              <img/>
              <img/>
              <img/>
            </div>
          </div>
        </div>

        <div className='introduction-crypto section'>
          <div className='container'>
            <div className='people side'>
              <img/>
              <img/>
              <img/>
              <img/>
            </div>
            <div className='info side'>
              <h1>Introduction to crypto</h1>
              <p>
                Late 2017, Kerman met an entrepreneur called Rob Morris.
                He converted Kerman from being a no-coiner to reading the Bitcoin white paper to developing on Ethereum.
                During this time he met Andy Chen Fang, Kevin Lu & Kevin Zheng at various crypto meetup.
              </p>
            </div>
          </div>
        </div>

        <div className='first-project section'>
          <div className='container'>
            <div className='info side'>
              <h1>First project</h1>
              <p>
                The team’s first project was a masternode hosting site with a monthly subscription model using Stripe.
                However one week later we got shut down since the business was providing “prohibited” activities according to banks.
              </p>
            </div>
            <div className='image side'>
              <img/>
            </div>
          </div>
        </div>

        <div className='8x-born section'>
          <div className='container'>
            <div className='image side'>
              <img/>
            </div>
            <div className='info side'>
              <h1>8x is born</h1>
              <p>
                To our surprise there wasn’t a solution to enable recurring payments.
                Hence we spent a few weeks researching ways to solve the three main problems with recurring payments:

                1. <span className='bold'>Volatility</span>. Merchants don’t want to deal with volatility.
                Using a stable coin for transactions, we solved this problem.

                2. <span className='bold'>Push based</span>. Blockchains require a private key to sign and make a transaction.
                Using the ERC20 approve function, we can gain pre-authorisation to pull funds from a user’s wallet directly.

                3. <span className='bold'>Scheduling</span>. You can’t schedule a smart contract to call itself at a later point in time.
                8x token holders earn a fee for executing transactions billing period on behalf of subscribers.
              </p>
            </div>
          </div>
        </div>

        <div className='community section'>
          <div className='container'>
            <div className='info side'>
              <h1>Community initiative</h1>
              <p>
                We wanted to unite all the layer 2 protocols built on Ethereum.
                So we decided to start a grass-roots effort to reach out to all the protocols and unite them via a newsletter.
                The result was Protocol Weekly which contains updates from each project and one thing they need help with.
              </p>
            </div>
            <div className='image side'>
              <img/>
            </div>
          </div>
        </div>

        <div className='our-team section'>
          <div className='container'>
            <h1>Our team</h1>
            <div className='people-container'>
              <PersonBox
                name={'Kerman'}
                title={'Founder/Engineer'}
                image={''}
                twitter={''}
                github={''}
                linkedin={''}
                medium={''}/>
              <PersonBox
                name={'Andy'}
                title={'Marketing'}
                image={''}
                twitter={''}
                github={''}
                linkedin={''}
                medium={''}/>
              <PersonBox
                name={'Kevin L'}
                title={'Community'}
                image={''}
                twitter={''}
                github={''}
                linkedin={''}
                medium={''}/>
              <PersonBox
                name={'Kevin Z'}
                title={'Operations'}
                image={''}
                twitter={''}
                github={''}
                linkedin={''}
                medium={''}/>
              <PersonBox
                name={'Rob'}
                title={'Advisor'}
                image={''}
                twitter={''}
                github={''}
                linkedin={''}
                medium={''}/>
              <PersonBox
                name={'Daniel'}
                title={'Advisor'}
                image={''}
                twitter={''}
                github={''}
                linkedin={''}
                medium={''}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default About;
