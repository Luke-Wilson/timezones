import React from 'react';
import Clock from './Clock.jsx';

const ClockList = (props) => (
  <div className="container">
    <div className="row">
      {props.cities.map((city, key) => {
        return <Clock timezone={city.timezone} name={city.name} key={key} />
      })}
    </div>
  </div>
)

export default ClockList;
