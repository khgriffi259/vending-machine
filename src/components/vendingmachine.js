import React, { Component } from 'react';
import Buttons from './buttons'
import Display from './display'
import Logo from './logo'
import Items from './items'
import Dispenser from './dispenser'
import CoinReturn from './coinreturn'
import { connect } from 'react-redux'

class VendingMachine extends Component {
  
  render() {
    const { items, money_received, priceOfItem, purchaseError} = this.props;
    
    return (
        <div className=" vending_machine">
          <div className="row">
            <div className="col-xs-12">
              <Logo />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-9">
              <div className="window">
                <Items items={items}/>  
              </div>
              <Dispenser />
            </div>
            <div className="col-xs-3">
              <Display money_received={money_received} priceOfItem={priceOfItem} purchaseError={purchaseError}/>
              <CoinReturn  />
              <Buttons items={items} money_received={money_received} />
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    items: state.items.items,
    priceOfItem: state.items.priceOfItem,
    money_received: state.money.money_received,
    purchaseError: state.items.purchaseError
  }
}

export default connect(mapStateToProps)(VendingMachine);
