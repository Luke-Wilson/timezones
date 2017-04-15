import React from 'react';
import Clock from './Clock.jsx';

const ClockList = (props) => (
  <div className="container">
    <div className="row">
      {props.cities.map(city => {
        return <Clock timezone={city.timezone} name={city.name} />
      })}
    </div>
  </div>
)

export default ClockList;
