import './App.css';
import React, { Component } from 'react';
import SimpsonQuote from './components/SimpsonQuote';
import Loading from './components/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
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

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    return (
      <div>
        {this.state.quote ? (
          <SimpsonQuote quote={this.state.quote} />
        ) : (
          <Loading />
        )}

        <button onClick={this.fetchQuote}>Get random quote</button>
      </div>
    );
  }
}

export default App;
