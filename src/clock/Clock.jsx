import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    const {timezone, name} = props;
    this.state = {
      timezone: timezone,
      name: name,
      time: ''
    }
  }

  componentWillMount() {
    setInterval(function() {
      this.setTime();
    }.bind(this), 1000);
  }

  setTime() {
    let now = new Date();
    let hours = now.getUTCHours() + eval(this.state.timezone);
    let mins = now.getUTCMinutes();
    let secs = now.getUTCSeconds();
    this.setState({
      time: this.addZeroes([hours, mins, secs])
    })
  }

  addZeroes(items) {
    items = items.map(item => {
      item = item.toString();
      if (item.length === 1) {
        return '0' + item;
      } else {
        return item;
      }
    });
    items[0] = items[0] > 23 ? items[0] - 24 : items[0];
    return items.join(":");
  }

  render () {
    return (
      <li className="clock">{this.state.name} = {this.state.time}</li>
    )
  }
}