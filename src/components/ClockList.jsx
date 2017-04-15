import React from 'react';
import Clock from './Clock.jsx';

const ClockList = (props) => (
  <ul>
    {props.cities.map(city => {
      return <Clock timezone={city.timezone} name={city.name} />
    })}
  </ul>
)

export default ClockList;
