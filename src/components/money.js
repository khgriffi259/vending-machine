import React from 'react';
import { connect } from 'react-redux'
import { addMoney } from '../actions/moneyActions'
import nickel from '../img/nickel.jpg'
import dime from '../img/dime.jpg'
import quarter from '../img/quarter.jpg'
import dollar from '../img/dollar.jpg'
import Items from './items';

 class Money extends React.Component {
    state = {
            coins: [
                {name: 'nickel', amount: 0.05},
                {name: 'dime', amount: 0.10},
                {name: 'quarter', amount: 0.25},
                {name: 'dollar', amount: 1.00 }
            ]
        }
        
    render() {
        return (
            <div className="money">
                <div className="coins">
                    {this.state.coins.map(coin => {
                        switch (coin.name) {
                            case 'nickel':
                                return (
                                    <img onClick={() => this.props.addMoney(.05)} src={nickel} alt={nickel}/>
                                )
                            case 'dime': 
                                return (
                                    <img onClick={() => this.props.addMoney(.10)} src={dime} alt={nickel}/>
                                )
                            case 'quarter':
                                return (
                                    <img onClick={() => this.props.addMoney(.25)} src={quarter} alt={nickel}/>
                                 )
                            case 'dollar':
                                return (
                                    <img onClick={() => this.props.addMoney(1.00)} src={dollar} alt={nickel}/>
                                )
                            default:
                                    return 
                        }
                    })}                       
                </div>

            </div>
                
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMoney: (amount) => dispatch(addMoney(amount))
    }
}
export default connect(null, mapDispatchToProps)(Money)
