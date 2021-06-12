import React, { useState } from 'react';
import TrackingForm from './components/TrackingForm';
import TrackingEvents from './components/TrackingEvents';

import { track } from './helpers/ApiHelper';

function App() {

  const [events, setEvents] =  useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    track(data.tracking).then(setEvents).catch(console.error)
  };

  return (
    <div className="container">
      <TrackingForm submitHandler={submitHandler} />
      <TrackingEvents events={events} />
    </div>
  );
}

export default App;
