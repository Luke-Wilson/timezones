import React from 'react';
import ClockList from './ClockList.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [
        {name: "Sydney", timezone: "10"},
        {name: "Sacramento", timezone: "-7"},
        {name: "New York", timezone: "-4"} 
      ]
    };
  }

  componentWillMount() {
    console.log('yo');
  }

  render() {
    return (
      <ClockList cities={this.state.cities} />
    )
  }
}
