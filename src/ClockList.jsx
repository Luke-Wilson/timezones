import React from 'react';
import Clock from './clock/Clock.jsx';

var cities = [
  {name: "Sydney", timezone: "10"},
  {name: "Sacramento", timezone: "-7"}
];

const ClockList = (props) => (
  <ul>
    {props.cities.map(city => {
      return <Clock timezone={city.timezone} name={city.name} />
    })}
  </ul>
)

export default ClockList;
