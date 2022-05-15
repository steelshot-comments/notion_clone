import { Menu, Button } from "antd";
import Image from "next/image";
import { useState } from "react";

function EmojiPicker({ addEmoji }) {
  const [current, setCurrent] = useState("Emoji");
  const items = [
    {
      label: "Emoji",
      key: "Emoji",
    },
    {
      label: "Upload an image",
      key: "Upload an image",
    },
    {
      label: "Link",
      key: "Link",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const people = [];

  for (let i = 0; i < 74; i++) {
    people.push(String.fromCodePoint(i + 128512));
  }

  const symbols = [];

  for (let i = 0; i < 12; i++) {
    symbols.push(String.fromCodePoint(i + 128992));
  }

  for (let i = 0; i < 3; i++) {
    symbols.push(String.fromCodePoint(i + 9193));
  }

  for(let i = 0; i < 12; i++) {
    symbols.push(String.fromCodePoint(i + 9800));
  }

  for(let i = 0; i < 12; i++) {
    symbols.push(String.fromCodePoint(i + 9827));
  }

  return (
    <div className="w-[418px] absolute bg-[#181818] z-10">
      <header className="flex items-center justify-between">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Button>Random</Button>
        <Button>Remove</Button>
      </header>
      <main className="select-none max-h-[268px] overflow-y-scroll">
        <label className="text-white block uppercase">people</label>
        {people.map((emoji) => (
          <div
            role="img"
            aria-label="emoji"
            key={emoji}
            className="w-8 h-8 hover:bg-white/5 inline-grid place-items-center rounded cursor-pointer"
            onClick={addEmoji}
          >
            {/* <Image src={emoji} width={24} height={24} alt={emoji}/> */}
            {emoji}
          </div>
        ))}
        <label className="text-white block uppercase">symbols</label>
        {symbols.map((emoji) => (
          <div
            role="img"
            aria-label="emoji"
            key={emoji}
            className="w-8 h-8 hover:bg-white/5 inline-grid place-items-center rounded cursor-pointer"
            onClick={addEmoji}
          >
            {/* <Image src={emoji} width={24} height={24} alt={emoji}/> */}
            {emoji}
          </div>
        ))}
      </main>
    </div>
  );
}

export default EmojiPicker;
