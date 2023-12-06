import React from 'react';
import WeeklySchedule from './WeeklySchedule';

const Calendar = () => {
  // Hardcoded schedule data for the entire week
  const weekSchedule = [
    { day: 'Monday', time: '8:00 AM - 5:00 PM', checked: false },
    { day: 'Tuesday', time: '8:00 AM - 5:00 PM', checked: false },
    { day: 'Wednesday', time: '8:00 AM - 5:00 PM', checked: false },
    { day: 'Thursday', time: '8:00 AM - 5:00 PM', checked: false },
    { day: 'Friday', time: '8:00 AM - 5:00 PM', checked: false },
  ];

  return (
    <div>
      <h2>Weekly Schedule</h2>
      <WeeklySchedule weekSchedule={weekSchedule} />
    </div>
  );
};

export default Calendar;
