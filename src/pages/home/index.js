/* Import statements */
import React, { Component } from 'react';
import EcosystemBox from '../../components/ecosystem-box';

import styles from './style.scss';

class Home extends Component {
   render() {
        return (
            <div>

                <div class="section">

                    <div class="container">

                        <div class="left-side">
                            <h1>Recurring Ethereum payments made possible.</h1>
                            <p>Whether it’s paying for your favourite shows, rent or making a monthly contribution, we’re creating a protocol to power recurring payments on the blockchain.</p>
                            <div class="button">
                                <a href="/">Download Whitepaper</a>
                            </div>
                        </div>

                        <div class="right-side">
                            <img/>
                        </div>

                    </div>

                </div>

                <div class="section">

                    <div class="container">

                        <div class="heading-container">
                            <h2>Ecosystem</h2>
                            <p>The 8x protocol requires an ecosystem of businesses, consumers and token holders in order to operate. </p>
                        </div>

                        <div class="ecosystem-items">

                            <EcosystemBox title="Businesses" features={["Zero volatility through the use of Dai stable coin", "Cheaper than Stripe & PayPal", "Easy to implement SDKs"]}/>
                            <EcosystemBox title="Users" features={["Zero volatility through the use of Dai stable coin", "Manage all your subscriptions through one interface", "Your funds always stay with you, in your control"]}/>
                            <EcosystemBox title="Token Holders" features={["Earn 8x tokens by processing transactions on the network", "Have a say in what changes are made to the protocol"]}/>

                        </div>


                    </div>

                </div>

                <div class="section">

                    <div class="container">

                        <h2>8x Protocol</h2>
                        <p>
                            1. As a business, if you were to accept Ethereum for recurring payments, the volatility would be unfeasible to accept as a payment method. Between January 2018 and March 2018 the price of Ether dropped by 70%. This level of volatility can be infeasible for both businesses and customers. By using the MakerDao stable coin, the protocol allows for stable exchanges of value for both parties.
                            <br/>
                            <br/>
                            2. To enable “pull” payments (bypass the need to manually sign a transaction), we simply ask for your approval to spend Dai on your behalf. Your funds stay with you at all times, not stored in a smart contract.
                            <br/>
                            <br/>
                            3. You can’t schedule repeating transactions on the blockchain automatically. Existing methodologies involve relying on a centralised 3rd party server to schedule transactions. The 8x protocol overcomes this by paying token holders a fee of the transaction to execute the transaction.
                        </p>

                    </div>

                </div>

                <div class="section">

                    <div class="container">

                        <h2>Token Holders</h2>

                        <div class="token-holders">


                        </div>

                    </div>

                </div>

            </div>
        )
   }
}

export default Home;
