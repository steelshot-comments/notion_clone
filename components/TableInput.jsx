import { useState } from "react";

function TableInput() {
  const [value, setValue] = useState("");
  return (
    <input
      type={"text"}
      className="w-full min-w-[140px] max-w-[240px] bg-transparent outline-[#5e87c9] break-words whitespace-nowrap px-[9px] py-[7px]"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default TableInput;
