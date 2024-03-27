import React from "react";
import "./sections.css";

const NextDatesSection = () => {
  return (
    <section className="next-dates-section">
      <h2>Next Dates</h2>
      <p>Here are the upcoming dates for your reference:</p>
      <ul>
        <li>Date 1</li>
        <li>Date 2</li>
        <li>Date 3</li>
        {/* Add more dates as needed */}
      </ul>
    </section>
  );
};

export default NextDatesSection;
