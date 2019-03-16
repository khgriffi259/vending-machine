import React, { Component } from 'react';
import Navbar from './components/navbar'
import VendingMachine from './components/vendingmachine';
import Money from './components/money';

class App extends Component {
  
  state = {
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Money />
            </div>
            <div className="col-sm-12 col-md-6">
              <VendingMachine />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
