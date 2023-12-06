import React, { useState } from 'react';
import Calendar from './Calendar';

function App2() {
  const [showWeek, setShowWeek] = useState(false);

  const handleCalendarClick = () => {
    setShowWeek(!showWeek);
  };

  return (
    <div>
      <h1>Weekly Calendar App</h1>
      <button onClick={handleCalendarClick}>Show Week</button>
      {showWeek && <Calendar />}
    </div>
  );
}

export default App2;
