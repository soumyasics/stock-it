import React, { useState } from "react";
import { useEffect } from "react";
export const DateOfBirthSelector = ({ updateDOB }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  useEffect(() => {
    const formattedDate = `${day}-${month}-${year}`;
    updateDOB(formattedDate);
  }, [day, month, year]);

  return (
    <div className="dob d-flex" style={{ width: "300px" }}>
      <select style={{ color: "black" }} value={day} onChange={handleDayChange}>
        <option value="">Date</option>
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {String(i + 1).padStart(2, "0")}
          </option>
        ))}
      </select>
      <select
        style={{ color: "black" }}
        value={month}
        onChange={handleMonthChange}
      >
        <option value="">Month</option>
        {months.map((month, index) => (
          <option key={index + 1} value={String(index + 1).padStart(2, "0")}>
            {month}
          </option>
        ))}
      </select>
      <select
        style={{ color: "black" }}
        value={year}
        onChange={handleYearChange}
      >
        <option value="">Year</option>
        {Array.from({ length: 101 }, (_, i) => (
          <option key={i + 1920} value={i + 1920}>
            {i + 1920}
          </option>
        ))}
      </select>
      {/* <div>Selected Date: {formattedDate}</div> */}
    </div>
  );
};
