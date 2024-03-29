import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");
  return (
    <input
      type={"text"}
      className="flex-1 w-full max-w-[240px] min-w-[140px] bg-transparent break-words whitespace-nowrap px-[9px] py-2 outline-none"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
