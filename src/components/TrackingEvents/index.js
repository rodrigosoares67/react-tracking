import React, { Fragment } from 'react';

function TrackingEvents({ events }) {
  if(!events || events.length === 0) return null;

  return (
    <Fragment>
      <h1>Tracking Events</h1>
      <ul className="list-group">
        { events.map(item => {
          return (
            <li key={item.event} className="list-group-item">
              <span>{item.date} - {item.hour}</span>
              <span>{item.event}</span>
              <span>{item.location}</span>
              {/* <span>{item.message}</span> */}
            </li>
            )}
          )
        }
      </ul>
    </Fragment>
  )
}

export default TrackingEvents;