import KanbanColumn from "./KanbanColumn";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Kanban() {
  const [columns, setColumns] = useState([{ id: 1, title: "Backlog" }, { id: 2, title: "In Progress" }, { id: 3, title: "Done" }]);
  
  function handleBtnClick(){
    setColumns([
      ...columns,
      {
        id: uuid(),
        title: 'Untitled',
        src: 'https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        // current date
        datetime: new Date().toISOString().slice(0, 10),
        tag: 'Hey there',
      },
    ]);
  }

  return (
    <div className="  w-[100vw] -translate-x-1/2 p-3 flex overflow-x-scroll h-auto gap-3 text-black">
      {columns.map(column => (
        <KanbanColumn key={column.id} id={column.id} title={column.title} />
      ))}
      <button className="w-80 h-min flex-shrink-0 inline-flex items-center justify-center gap-3 cursor-pointer py-2 rounded-lg bg-gray-100" onClick={handleBtnClick}>
        + Add column
      </button>
    </div>
  );
}

export default Kanban;
