import Image from "next/image";
import EmojiPicker from "./EmojiPicker";
import { useState, useEffect } from "react";

function PageCover() {
  const [title, setTitle] = useState("");
  const [visible, setVisible] = useState(false);
  const [emoji, setEmoji] = useState("😀");

  useEffect(() => {
    document.title = title;
  }, [title]);

  function showEmojiPicker() {
    setVisible(!visible);
  }

  const setPageCover = (emoji) => {
    setEmoji(emoji);
    setVisible(false);
  };

  return (
    <div>
      <div className="relative h-[30vh] w-full -z-10">
        <Image
          src="https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fwoodcuts_3.jpg?table=block&id=c4c5c83c-3e5f-4f85-a163-5d2d659890b9&spaceId=0b3d91a9-005e-4248-9a00-5a5be01cfe0e&width=2000&userId=2bf13068-183c-426f-8e6d-39e57124cf86&cache=v2"
          alt="bg"
          width={1526.4}
          height={229.2}
          className="block object-cover w-full h-[30vh] object-[center_20%]"
        />
        <div className="relative">
          <button className="absolute bottom-[10px] right-[100px]">
            Reposition
          </button>
        </div>
      </div>
      <div className="pl-[409px] -mt-[42px] relative">
        {/* <Image
          src={emoji}
          alt="icon"
          width={78}
          height={78}
          className="w-[78px] h-[78px] ml-[3px] hover:bg-hover"
          onClick={showEmojiPicker}
        /> */}
        <div
          className="w-[78px] h-[78px] ml-[3px] hover:bg-white/5 z-10 grid place-items-center text-7xl cursor-pointer"
          onClick={showEmojiPicker}
        >
          {emoji}
        </div>
        {visible && (
          <EmojiPicker
            addEmoji={(e) => setPageCover(e.target.innerText)}
            // removeEmoji={setEmoji(null)}
          />
        )}
        <div className="flex"></div>
        <input
          type="text"
          className="font-bold min-h-[1em] text-[40px] leading-[1.2rem] outline-0 border-0 bg-transparent appearance-none resize-none"
          placeholder="Untitled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="comments-section"></div>
      </div>
    </div>
  );
}

export default PageCover;
