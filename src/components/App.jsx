import React from 'react';
import 'whatwg-fetch';

import ClockList from './ClockList.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  getCities() {
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }

    function parseJSON(response) {
      return response.json()
    }

    fetch('/api/city', {
      method: "GET"
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(cities => {
      this.setState({
        cities: cities
      })
    })
  }

  componentDidMount() {
    this.getCities();
  }

  render() {
    return (
      <ClockList cities={this.state.cities} />
    )
  }
}
