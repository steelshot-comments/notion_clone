import Image from "next/image";
import { useState } from "react";
import table from "../public/table.svg";
import kanban from "../public/kanban.svg";
import list from "../public/list.svg";
import timeline from "../public/timeline.svg";
import gallery from "../public/gallery.svg";
// import calendar from "../public/calendar.svg";

function Database() {
  const [views, setViews] = useState([
    {
      name: "Table",
      image: table,
    },
    {
      name: "Kanban",
      image: kanban,
    },
    {
      name: "List",
      image: list,
    },
    {
      name: "Timeline",
      image: timeline,
    },
    {
      name: "Gallery",
      image: gallery,
    },
  ]);
  const [currentView, setCurrentView] = useState("");

  return (
    <div className="select-none group">
      <div className="flex">
        {views.map(({ name, image }, index) => (
          <div
            key={index}
            className="h-7 px-2 flex items-center gap-[6px] cursor-pointer rounded text-sm hover:bg-white/5"
            onClick={() => setCurrentView(name)}
          >
            <Image
              src={image}
              className="fill-white/5"
              width={16}
              height={16}
              alt={name}
            />
            {name}
          </div>
        ))}
        <div
          className="h-7 px-2 flex items-center cursor-pointer rounded text-sm opacity-0 hover:bg-white/5 group-hover:opacity-100 transition-opacity"
          onClick={() => setViews([...views, { name: "Table", image: table }])}
        >
          Add View
        </div>
      </div>
      <div className="action-btns"></div>
    </div>
  );
}

export default Database;
