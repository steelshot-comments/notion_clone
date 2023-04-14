import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      type={"text"}
      className="flex-1 w-full min-w-[140px] bg-transparent break-words whitespace-nowrap px-[9px] outline-none"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
