import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    ticker: '',
    price: null,
    name: null
  }

  handleChange = (event) => {
    this.setState({ ticker: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  
    // Make a request to the API using the ticker symbol
    axios.get(`https://production.api.coindesk.com/v2/tb/price/ticker?assets=${this.state.ticker}`)
      .then(response => {

        const formatted = response.data.data;

  
        // Check if the JSON object contains the ticker symbol
        if (formatted[this.state.ticker]) {
          // Extract the price from the JSON object
          const price = formatted[this.state.ticker].ohlc.c;
          const name =  formatted[this.state.ticker].name;
          const roundedPrice = Math.round(price * 100) / 100;
          const formattedPrice = `$ ${roundedPrice.toLocaleString()}`;
          // Update the state with the price
          this.setState({ name });
          this.setState({ price: formattedPrice });
        } else {
          // Show an error message if the ticker symbol is not found in the JSON object
          alert(`No data found for ticker symbol: ${this.state.ticker}`);
        }
      })
      .catch(error => {
        // Handle any errors that occurred in the request
        console.error(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ticker symbol:
          <input type="text" value={this.state.ticker} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.price && <p>The price of {this.state.name} is: {this.state.price}</p>}
      </form>
    );
  }
}

export default App;