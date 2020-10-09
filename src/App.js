import React, { Component } from 'react';
import FinancialCard from './components/FinancialCard'
import SearchFinancialsForm from './components/SearchFinancialsForm'
import './App.css';

class App extends Component {
  
  state = {
    allFinancials: [],
    selectedFinancials: [],
    inputValue: ""
  }

  handleClick = (event) => {
      fetch('https://financialmodelingprep.com/api/v3/income-statement/AAPL?apikey=demo')
        .then(response => response.json())
        .then(financialData => {
          this.setState({allFinancials: financialData})
          this.setState({selectedFinancials: financialData})
        })
  }


  showFinancials = () => this.state.selectedFinancials.map(
    financial => <FinancialCard key={financial.id} financial={financial}/>
  )

  filterFinancials = ( event ) => {
    const input = event.target.value
    const filteredFinancials = this.state.allFinancials
      .filter(
        financial =>
          financial.date.includes(input)
      )
      this.setState({selectedFinancials: filteredFinancials})
  }
  

  render(){

  return (
    <div className="App">
      <div>
        <button onClick={this.handleClick}>Show Financials</button>
      </div>
      <SearchFinancialsForm filterFinancials={this.filterFinancials} />
      {this.showFinancials()}
    </div>
  )}
}

export default App;