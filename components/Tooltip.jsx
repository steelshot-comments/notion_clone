import React from "react";

function Tooltip() {
  return (
    <div id="tooltip" className="absolute left-0 top-0 font-normal leading-6 text-left text-start text-xs inline-block">
      <div className="top-0.5 left-0 -mt-1.5 border-4 border-l-0 border-r-black" />
      <div className="max-w-[200px] py-1 px-2 text-white text-center bg-black rounded">ToolTip Component</div>
    </div>
  );
}

export default Tooltip;
