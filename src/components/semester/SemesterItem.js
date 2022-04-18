import React from "react";

//? HOW THE ITEM LOOKS:
function SemesterItem({ semester }) {
  return (
    <div>
      <h1>{semester.name}</h1>
    </div>
  );
}

export default SemesterItem;
