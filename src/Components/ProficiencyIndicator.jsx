import React from "react";

export const ProficiencyIndicator = ({ level }) => {
  const total = 5;

  return (
    <div className="proficiency-indicator">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`circle ${index < level ? "filled" : ""}`}
        ></span>
      ))}
    </div>
  );
};
