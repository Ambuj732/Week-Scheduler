import React from 'react';

const WeeklySchedule = ({ weekSchedule }) => {
  return (
    <div>
      {weekSchedule.map(({ day, time, checked }) => (
        <div key={day}>
          <label>
            {day} - {time}
            <input type="checkbox" checked={checked} onChange={() => {}} />
          </label>
        </div>
      ))}
    </div>
  );
};
export default WeeklySchedule;
