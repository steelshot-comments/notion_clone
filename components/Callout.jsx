import Input from "./Input";
import React from "react";
import EmojiPicker from "./EmojiPicker";
import { useState } from "react";

function Callout() {
  const [emoji, setEmoji] = useState("😀");
  const [visible, setVisible] = useState(false);

  function onEmojiClick(e) {
    setEmoji(e.target.textContent);
    setVisible(false);
  }
  function showEmojiPicker() {
    setVisible(!visible);
  }
  return (
    <div className="flex items-center w-full h-full p-4">
      <span
        className="w-6 h-6 grid place-items-center cursor-pointer hover:bg-white/5"
        onClick={showEmojiPicker}
      >
        {emoji}
      </span>
      {visible && <EmojiPicker addEmoji={(e) => onEmojiClick(e)} />}
      <Input />
    </div>
  );
}

export default Callout;
