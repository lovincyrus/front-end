import React from 'react';

import { default as Images } from '../middleware/images';

import Header from '../components/header';
import Footer from '../components/footer';
import EightExPay from '8x.pay';

class Beta extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      planHash: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

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
          <div className='product-item'>
            <h2>8x Pay</h2>
            <p>Enable your users to pay with 8x. To get started create a plan from the manage portal and enter the returned plan hash.</p>

            <div className='pay-box'>
              <input
                className='card'
                type='text'
                name='planHash'
                onChange={this.handleChange}
                placeholder='Enter plan hash'
              />

              <EightExPay planHash={this.state.planHash} label='Pay'/>
            </div>

          </div>
          <div className='product-item'>
            <h2>Manage</h2>
            <p>Create a plan, view your subscriptions and cancel any that you don’t want to subscribe to anymore.</p>
            <button type='button' className='manage'>Manage</button>
          </div>
        </div>

        <div className='developer section'>
          <div className='container'>
            <a href='https://docs.8xprotocol.com/'><h2>Are you a developer?</h2></a>
          </div>
        </div>

        <Footer/>
      </div>
    );
  };
}

export default Beta;