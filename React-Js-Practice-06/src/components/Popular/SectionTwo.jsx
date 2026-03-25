import React from "react";

const SectionTwo = () => {
  return (
    <div className="py-10">
      <ul className="flex gap-10 font-semibold text-sm ">
        <li>All</li>
        <li className="text-emerald-600 border-b-2 pb-1 ">Today</li>
        <li>This Week</li>
        <li>Last Week</li>
        <li>This Month</li>
      </ul>
    </div>
  );
};

export default SectionTwo;
