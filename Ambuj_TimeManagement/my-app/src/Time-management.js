import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/en-gb'; // Import the locale for English

const WeeklyScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(moment().startOf('week')); // Default to the start of the current week
  const [selectedTimezone, setSelectedTimezone] = useState('UTC'); // Default timezone

  useEffect(() => {
    // Update moment-timezone with the selected timezone
    moment.tz.setDefault(selectedTimezone);
  }, [selectedTimezone]);

  const handleDateChange = (weeksToAdd) => {
    setSelectedDate((prevDate) => prevDate.clone().add(weeksToAdd, 'weeks'));
  };

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const renderWeeklySchedule = () => {
    const daysOfWeek = moment.weekdaysShort(); // ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return daysOfWeek.map((day, index) => (
      <div key={index}>
        <p>{day}</p>
        {/* Add your checkboxes and other UI elements for each day and time */}
      </div>
    ));
  };

  return (
    <div>
      <h2>Weekly Scheduler</h2>
      <div>
        <button onClick={() => handleDateChange(-1)}>Previous Week</button>
        <button onClick={() => handleDateChange(1)}>Next Week</button>
      </div>
      <div>
        <label htmlFor="timezoneSelect">Select Timezone: </label>
        <select id="timezoneSelect" onChange={handleTimezoneChange}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option> {/* Change to a different timezone */}
        </select>
      </div>
      <div>
        <p>Selected Date: {selectedDate.format('MMMM D, YYYY')}</p>
        <p>Selected Timezone: {selectedTimezone}</p>
      </div>
      <div>
        {renderWeeklySchedule()}
      </div>
    </div>
  );
};

export default WeeklyScheduler;
