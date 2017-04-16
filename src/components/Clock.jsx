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
    items[0] = items[0] > 23 ? eval(items[0]) - 24 : items[0];
    items[0] = items[0] < 0 ? eval(items[0]) + 12 : items[0];
    return items.join(":");
  }

  render () {
    return (
      <div className="col-md-3 timeblock">
        <div className="time row justify-content-center">{this.state.time}</div>
        <div className="city row justify-content-center">{this.state.name}</div>
      </div>
    )
  }
}
