import React from 'react';
import './App.css';
import ResultComponent from './Result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      denom_count:{
        '2000':0,
        '500':0,
        '200':0,
        '100':0,
        '50':0,
        '20':0,
        '10':0,
        '5':0,
        '2':0,
        '1':0
      },
      totalCount:0,
      enteredValue:''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({enteredValue: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({totalCount:0});
    var denominations=[2000,500,200,100,50,20,10,5,2,1]
    var updated_value=this.state.enteredValue;
    denominations.forEach((denom)=>{
      this.state.denom_count[denom]=parseInt(updated_value/denom);
      updated_value=updated_value%denom;
      this.setState(state => ({
        totalCount:state.totalCount+state.denom_count[denom]
    }));
  })
}
  render() {
    return (
      <div>
        <div class="header">ATM Money Dispenser</div>
          <div className="app">
            <div className="app-layout">
              <p className="app-header">
              Welcome to ATM
              </p>
              <div className="app-amount">
                <label className="labelAmount">Enter the amount </label><br></br>
                <input className="inputAmount" type="number"  id="myInput" value={this.state.enteredValue} onChange={this.handleChange} ></input><br></br>
                <button className="submitAmount" type="submit" onClick={this.handleSubmit}>Get Money</button>
              </div>
            </div>
            <ResultComponent denom_count= {this.state.denom_count} totalCount={this.state.totalCount} />
        </div>
      </div>
    );
  }
}

export default App;
