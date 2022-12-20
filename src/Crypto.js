import React from 'react';
import axios from 'axios';
class Crypto extends React.Component {
  state = {
    ticker: 'BTC',
    price: null,
    name: null,
    tickers: ['BTC', 'ETH', 'XRP', 'BCH', 'ADA', 'XLM', 'NEO', 'LTC', 'EOS', 'XEM', 'IOTA', 'DASH', 'XMR', 'TRX', 'ICX', 'ETC', 'QTUM', 'BTG', 'VET', 'LSK', 'USDT', 'OMG', 'STEEM', 'ZEC', 'SC', 'BNB', 'XVG', 'ZRX', 'REP', 'WAVES', 'MKR', 'DCR', 'BAT', 'DGB', 'LRC', 'KNC', 'SYS', 'BNT', 'REQ', 'LINK', 'QSP', 'CVC', 'RLC', 'ENJ', 'STORJ', 'ANT', 'SNGLS', 'THETA', 'MANA', 'MLN', 'DNT', 'AMP', 'NMR', 'STX', 'GMT', 'POLIS', 'DOT', 'DAI', 'UNI', 'ATOM', 'GRT', 'LUNA', 'SCRT', 'IMX', 'ZIL', 'XTZ', 'FIL', 'OP', 'NANO', 'WBTC', 'BSV', 'DOGE', 'USDC', 'OXT', 'ALGO', 'BAND', 'BTT', 'FET', 'KAVA', 'USDP', 'PAXG', 'REN', 'AAVE', 'YFI', 'NU', 'MATIC', 'ICP', 'SOL', 'SUSHI', 'UMA', 'SNX', 'CRV', 'COMP', 'CELO', 'KSM', 'NKN', 'SHIB', 'SKL', 'SAND', 'UST', 'AVAX', 'IOTX', 'AXS', 'XYO', 'ANKR', 'CHZ', 'LPT', 'COTI', 'KEEP', 'GALA', 'CRO', 'ACHP', 'JASMY', 'SLP', 'APE', 'BUSD', 'CAKE', 'EGLD', 'ENS', 'FTM', 'FTT', 'HBAR', 'MBOX', 'MINA', 'MOVR', 'NEAR', 'NEXO', 'POLS', 'QNT', 'QUICK', 'RUNE', 'RVN', 'WAXP', 'WRX', 'XEC', 'CEL', 'ALPACA', 'AUDIO', 'AVA', 'CHR', 'CKB', 'CLV', 'FARM', 'FLOW', 'GLMR', 'IDEX', 'INJ', 'JOE', 'MIR', 'POLY', 'PYR', 'RARE', 'RAY', 'ROSE', 'SFP', 'SRM', 'STMX', 'SUN', 'SXP', 'VGX', 'WOO', 'YGG', 'LUNC', 'APT', 'MASK', 'DYDX', 'CTSI', 'CVX', 'FORTH', 'LDO', 'METIS', 'RBN', 'SAMO', 'SPELL', 'DLCS', 'MTVS', 'DFX', 'SCPX', 'SCPXX', 'DIGS', 'CCYS', 'CCYX', 'CPUS', 'CNES', 'CMI', 'CMIX', 'SMT', 'CCY', 'CCX', 'DTZ', 'DCF', 'CPU', 'CNE']
  }

  handleChange = (event) => {
    const ticker = event.target.options[event.target.selectedIndex].value;
    this.setState({ ticker });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://production.api.coindesk.com/v2/tb/price/ticker?assets=${this.state.ticker}`)
      .then(response => {
        const formatted = response.data.data;

        if (formatted[this.state.ticker]) {
          const price = formatted[this.state.ticker].ohlc.c;

          const name =  formatted[this.state.ticker].name;

          const roundedPrice = Math.round(price * 100) / 100;
          const formattedPrice = `$ ${roundedPrice.toLocaleString()}`;

          this.setState({ name });
          this.setState({ price: formattedPrice });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="Crypto">
        <form onSubmit={this.handleSubmit}>
          <label>
            Ticker symbol:
            <select value={this.state.ticker} onChange={this.handleChange}>
              {this.state.tickers.map(ticker => (
                <option value={ticker}>{ticker}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
          {this.state.price && <p>The price of {this.state.name} is: {this.state.price}</p>}
        </form>
      </div>
    );
  }
}

export default Crypto;