import React, { useState } from "react";
import UserList from "./UserList";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAccordionToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search user names..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <UserList
        activeIndex={activeIndex}
        onAccordionToggle={handleAccordionToggle}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Accordion;
