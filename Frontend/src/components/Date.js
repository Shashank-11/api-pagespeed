import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";

function Date() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormate='mm/dd/yyyy'
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText={"Select Date"}></DatePicker>
    </div>
  );
}

export default Date;
