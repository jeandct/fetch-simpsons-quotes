import './App.css';
import React, { Component } from 'react';
import SimpsonQuote from './components/SimpsonQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        quote:
          'By chilling my loins I increase the chances of impregnating my wife.',
        character: 'Apu Nahasapeemapetilon',
        image:
          'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
      },
    };
  }

  fetchQuote = () => {
    const axios = require('axios');
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes').then((res) => {
      let quote = res.data[0];
      this.setState({
        quote: quote,
      });
    });
  };

  render() {
    return (
      <div>
        <SimpsonQuote quote={this.state.quote} />
        <button onClick={this.fetchQuote}>Get random quote</button>
      </div>
    );
  }
}

export default App;
