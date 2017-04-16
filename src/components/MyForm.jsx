import React from 'react';

const MyForm = (props) => (
  <div className="col-md-4">
    <h4>Add a new location and timezone</h4>
    <form id="form" className="my-form form-control" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="city name" name="city" />
        <input className="form-control" type="text" placeholder="UTC offset" name="timezone" />
        <input className="form-control" type="text" placeholder="language (optional)" name="language" />
        <input className="form-control" type="submit" />
      </div>
    </form>
  </div>
)

export default MyForm;
