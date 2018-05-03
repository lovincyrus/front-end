/* Import statements */
import React, { Component } from 'react';
import EcosystemBox from '../../components/ecosystem-box';
import TokenHoldersBox from '../../components/token-holders-box';

import styles from './style.scss';
import diagram from '../../assets/images/8x-diagram.png';

import redCheckmark from '../../assets/images/red-checkmark.png';
import yellowCheckmark from '../../assets/images/yellow-checkmark.png';
import greenCheckmark from '../../assets/images/green-checkmark.png';

import businessIcon from '../../assets/images/business.png';
import userIcon from '../../assets/images/user.png';
import tokenHoldersIcon from '../../assets/images/token-holders.png';

import broadcastIcon from '../../assets/images/broadcast.png';
import claimIcon from '../../assets/images/flag.png';
import executionIcon from '../../assets/images/time.png';

class Home extends Component {
   render() {
        return (
            <div>

                <div class="hero section">

                    <div class="container">

                        <div class="left-side">
                            <h1>Recurring Ethereum<br/>payments made possible.</h1>
                            <p class="description">Whether it’s paying for your favourite shows, rent or making a monthly contribution, we’re creating a protocol to power recurring payments on the blockchain.</p>
                            <a class="button" target="_blank" href="https://github.com/8x-protocol/whitepaper/blob/master/8x_protocol_whitepaper.pdf">Download Whitepaper</a>
                        </div>

                        <div class="right-side">
                            <img src={diagram}/>
                        </div>

                    </div>

                </div>

                <div class="ecosystem section-alt">

                    <div class="container">

                        <div class="heading-container">
                            <h2>Ecosystem</h2>
                            <p>The 8x protocol requires an ecosystem of businesses, consumers and token holders in order to operate. </p>
                        </div>

                        <div class="items">

                            <EcosystemBox header={businessIcon} tick={redCheckmark} title="Businesses" features={["Zero volatility through the use of Dai stable coin", "Cheaper than Stripe & PayPal", "Easy to implement SDKs"]}/>
                            <EcosystemBox header={userIcon} tick={yellowCheckmark} title="Users" features={["Zero volatility through the use of Dai stable coin", "Manage all your subscriptions through one interface", "Your funds always stay with you, in your control"]}/>
                            <EcosystemBox header={tokenHoldersIcon} tick={greenCheckmark} title="Token Holders" features={["Earn 8x tokens by processing transactions on the network", "Have a say in what changes are made to the protocol"]}/>

                        </div>

                    </div>

                </div>

                <div class="protocol section">

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

                <div class="token-holders section-alt">

                    <div class="container">

                        <h2>Token Holders</h2>

                        <div class="items">

                            <TokenHoldersBox icon={broadcastIcon} title="Initial Transaction" description="When a customer subscribes to a plan, the transaction is emitted to token holders. Token holders are given the option to claim the right to process the transaction. 8x tokens need to be staked in order to claim."/>
                            <TokenHoldersBox icon={claimIcon} title="Claim Period" description="The earlier a transaction is claimed the less token holders earn in fees. If the claim period is open for 10 days, transactions claimed on the 1st day would earn 10% of the 1% fee. The resulting 90% results in token burn."/>
                            <TokenHoldersBox icon={executionIcon} title="Execution Time" description="When the subscription is to be paid, claimants are required to call the 8x protocol and execute the transaction. Failing to do so will result in their stake of 8x tokens to be burned. This will reduce the total supply of tokens."/>

                        </div>

                    </div>

                </div>

            </div>
        )
   }
}

export default Home;
