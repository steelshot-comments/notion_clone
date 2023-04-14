import Image from "next/image";
import { useState } from "react";
import chev from "../public/chevronDown.svg";

function List({ type }) {
  const [open, setOpen] = useState(false);

  function openToggle() {
    setOpen(!open);
  }

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div
          className="cursor-pointer hover:bg-white/5 w-[18px] h-[18px] rounded"
          onClick={openToggle}
        >
          {
            open ? (<Image src={chev} width={18} height={18} alt={"chevronDown"} className="rotate-90 duration-200" />)
              : (<Image src={chev} width={18} height={18} alt={"chevronUp"} className="duration-200" />)
          }
        </div>

        <input
          type="text"
          placeholder="Enter"
          className="pt-1 w-full h-6 outline-none border-0 bg-transparent appearance-none caret-white text-white resize-none text-base"
        />
      </div>
      {open && (
        <div className="flex flex-col pl-5 transition-all duration-200 ease-in-out">
          <span className="text-white/40">
            Empty toggle. Click or drop blocks inside.
          </span>
        </div>
      )}
    </div>
  );
}

export default List;
