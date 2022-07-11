import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from '../coin/Coin';
import './CoinFlipper.css';

export class CoinFlipper extends Component {
    static defaultProps = {
        coinFaces: [
            {cFace: 'heads', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/US_Half_Dollar_Obverse_2015.png/607px-US_Half_Dollar_Obverse_2015.png"},
            {cFace: 'tails', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/600px-US_50_Cent_Rev.png"}
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            currFace: null,
            flipCount: 0,
            headCount: 0,
            tailCount: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){

        let coinFace = choice(this.props.coinFaces);

        this.setState(currState =>{
            let newState = {
                ...currState,
                currFace: coinFace,
                flipCount: currState.flipCount + 1
            }

            if (coinFace.cFace == 'heads') {
                newState.headCount += 1;
            }else{
                newState.tailCount += 1;
            }

            return newState;

        });

    }

    handleClick(e){
        console.log('flipping coin');
        this.flipCoin();
    }

  render() {
    return (
        <div className='CoinFlipper'>
            <h1>Coin Flipper</h1>
            {this.state.currFace ? this.state.currFace.cFace : ''}
            <button onClick={this.handleClick}>Flip the Coin</button>
            <p>Out of {this.state.flipCount} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
        </div>
    )
  }
}

export default CoinFlipper