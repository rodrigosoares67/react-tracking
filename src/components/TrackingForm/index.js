import React, { Fragment } from 'react';

function TrackingForm({ submitHandler }) {
  return(
    <Fragment>
      <h1>React Tracking</h1>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control" />
        </div>

        <button type="submit" value="Track" className="btn btn-primary">Track</button>
      </form>
    </Fragment>
  )
}

export default TrackingForm;