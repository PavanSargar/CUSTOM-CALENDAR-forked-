import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDayIndex = new Date(year, month, numDays).getDay();

    const calendarDays = [];

    const totalCells = 35; // Total number of cells in a 5x7 grid

    // Calculate the number of empty cells at the beginning of the month
    const startEmptyCells = firstDayIndex;

    // Calculate the number of empty cells at the end of the month
    const endEmptyCells = totalCells - (startEmptyCells + numDays);

    // Add empty cells at the beginning of the month
    for (let i = 0; i < startEmptyCells; i++) {
      calendarDays.push(
        <div key={`empty-start-${i}`} className="calendar-day empty">
          {i + 1}
        </div>
      );
    }

    // Add date cards for each day of the month
    for (let i = 1; i <= numDays; i++) {
      calendarDays.push(
        <div key={i} className="calendar-day">
          <div className="date">{i}</div>
          {/* Customize date card with additional labels or data */}
          {/* Add your custom components or data here */}
        </div>
      );
    }

    // Add empty cells at the end of the month
    for (let i = 1; i <= endEmptyCells; i++) {
      calendarDays.push(
        <div key={`empty-end-${i}`} className="calendar-day empty">
          {i}
        </div>
      );
    }

    console.log("lastDayIndex: ", lastDayIndex);
    console.log(calendarDays);
    return calendarDays;
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <div className="month-year">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
