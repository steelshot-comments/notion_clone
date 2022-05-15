import KanbanCard from "./KanbanCard";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function KanbanColumn({ id, title }) {
  const [cards, setCards] = useState([
    {
      id: uuid(),
      title: "Backlog",
      src: "https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      datetime: new Date().toISOString().slice(0, 10),
      tag: "Backlog",
    },
    {
      id: uuid(),
      title: "In Progress",
      src: "https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      datetime: new Date().toISOString().slice(0, 10),
      tag: "In Progress",
    },
    {
      id: uuid(),
      title: "Done",
      src: "https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      datetime: new Date().toISOString().slice(0, 10),
      tag: "Done",
    },
  ]);

  function handleBtnClick(e) {
    e.preventDefault();
    setCards([
      ...cards,
      {
        id: uuid(),
        title: "Untitled",
        src: "https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        // current date
        datetime: new Date().toISOString().slice(0, 10),
        tag: "Hey there",
      },
    ]);
  }

  function dropHandler(e) {
    e.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = e.dataTransfer.getData("text/plain");
    e.target.appendChild(document.getElementById(data));
    console.log(e.target);
  }

  function dragEnterHandler(e) {
    e.preventDefault();
    e.target.style.outline = "2px dashed blue";
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    e.target.style.outline = "none";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.outline = "none";
    e.dataTransfer.dropEffect = "move";
  }

  return (
    <div className="p-3 w-80 rounded-md flex-shrink-0 bg-gray-100 h-min">
      <div className="flex justify-between">
        <h3 className="text-sm font-medium text-gray-700">
          {title} {cards.length}
        </h3>
        <div className="p-1 hover:bg-black/5 cursor-pointer duration-75 ease-linear">
          <svg
            viewBox="0 0 13 3"
            className="w-[14px] h-[14px] block fill-[rgba(55, 53, 47, 0.5)] flex-shrink-0"
          >
            <g>
              <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
              <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
              <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
            </g>
          </svg>
        </div>
      </div>
      <ul className="mt-2 max-h-[650px] overflow-y-scroll no-scrollbar">
        {cards.map((card) => (
          <li key={card.id} className="mb-3">
            <KanbanCard
              id={card.id}
              title={card.title}
              src={card.src}
              datetime={card.datetime}
              tag={card.tag}
            />
          </li>
        ))}
      </ul>
      <button
        className="w-full flex items-center justify-center gap-3 cursor-pointer py-2 rounded-lg bg-gray-100 border-dashed border-gray-500 border-2"
        onClick={handleBtnClick}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1C8 0.447715 7.55228 0 7 0C6.44772 0 6 0.447715 6 1V6H1C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H6V13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13V8H13C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6H8V1Z"
            fill="black"
          />
        </svg>
        <span className="font-medium">Add task</span>
      </button>
    </div>
  );
}

export default KanbanColumn;

{
  /* <div
  className="empty:h-3 empty:mb-0 h-auto mb-3"
  onDragEnter={dragEnterHandler}
  onDragLeave={dragLeaveHandler}
  onDrop={dropHandler}
  onDragOver={dragOverHandler}
></div> */
}
