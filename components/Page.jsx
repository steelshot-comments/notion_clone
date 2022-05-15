import { useState } from "react";

function Page({children}) {
    const [blocks, setBlocks] = useState([]);

  function getSelectionRange() {
    const selection = window.getSelection().toString();
    let rect;
    if (selection) {
      rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
      console.log(selection, rect);
    }
  }
  return (
    <div
      className="flex flex-col pt-[5px] pb-[30vh] px-[409px]"
      onSelect={getSelectionRange}
    >
      {children}
    </div>
  );
}

export default Page;
