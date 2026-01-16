import React from "react";

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  return (
    <div className="home">
      <h2 className="font-bold text-2xl">Calendar</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        numquam.
      </p>
    </div>
  );
};

export default Calendar;
