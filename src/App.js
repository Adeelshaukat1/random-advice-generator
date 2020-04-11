import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


export default class App extends Component {
  state = { advice: "" };




  componentDidMount() {
    this.fetchAdvice();
  }

  //using a get request to fetch an api from this site
  //feel free to use this.
  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
         .then((response) => {
           const { advice } = response.data.slip;
           console.log(advice);

          // since the object and the state name is advice we 
          // do not need to do {advice: advice}
           this.setState({ advice});

         })
         .catch((error) => {
           console.log(error)
 
         });
  }

  render() {
    //we are destructioring this object so it is easier to use.
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
        {/* we are making use of the destructioring */}
        <p className="heavy">{ advice }</p>

        {/* we are going to use an onClick function to make an
        API call everytime we hit the button */}
        <button className="button" onClick={this.fetchAdvice}>
          <span> New Advice </span>
        </button>
        </div>
      </div>
    )
  }
}
