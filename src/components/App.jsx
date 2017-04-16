import React from 'react';
import 'whatwg-fetch';

import ClockList from './ClockList.jsx';
import MyForm from './MyForm.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  postCity(formData) {
    var form = document.querySelector('form')
    var info = {}
    var formData = new FormData(form);
    for (var [key,value] of formData.entries()) {
      info[key] = value;
    }

    fetch('/api/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }).then(resp => {
      console.log(resp);
    });
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
      <div>
        <ClockList cities={this.state.cities} />
        <MyForm handleSubmit={this.postCity} />
      </div>
    )
  }
}
