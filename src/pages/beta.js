import React from 'react';

import { default as Images } from '../middleware/images';

import Header from '../components/header';
import Footer from '../components/footer';
import EightExPay from '8x.pay';

class Beta extends React.Component {

  render() {
    return (
      <div className='beta'>
        <Header theme='light'/>

        <div className='hero section'>
          <div className='container'>
            <div className='text-section'>

              <div className='subscribe-subheading'>
                <h1>Beta</h1>
              </div>

              <div className='description'>
                <p>We’ve got two products to let you try on 8x.</p>
                <p>Only on Kovan.</p>
              </div>

            </div>
          </div>
        </div>

        <div className='products section'>
          <div className='item'>
            <h2>8x Pay</h2>
            <p>Payment gateway to allow people to pay with 8x. To get started create a plan from the manage portal and enter the returned plan hash below.</p>
            <EightExPay planHash=''/>
          </div>
          <div className='item'>
            <h2>Manage Portal</h2>
            <p>Create a plan, view your subscriptions and cancel any that you don’t want to subscribe to.</p>
          </div>
        </div>


        <div className='developer section'>
          <div className='container'>
            <h2>Are you a developer?</h2>
            <div>
              <p>API Reference</p>
              <img/>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

export default Beta;